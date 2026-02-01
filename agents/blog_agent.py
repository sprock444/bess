"""Blog post generation agent using Anthropic API."""

import os
import json
from datetime import datetime
from typing import Optional
from anthropic import Anthropic

from config import (
    ANTHROPIC_API_KEY,
    DEFAULT_MODEL,
    COMPANY_NAME,
    COMPANY_WEBSITE,
    COMPANY_DESCRIPTION,
    TOPICS,
    BLOG_OUTPUT_DIR,
)
from templates.blog_templates import BLOG_TEMPLATES, SEO_GUIDELINES


class BlogAgent:
    """Agent for generating SEO-optimized blog posts about BESS technology."""

    def __init__(self, model: str = DEFAULT_MODEL):
        self.client = Anthropic(api_key=ANTHROPIC_API_KEY)
        self.model = model
        self.system_prompt = self._build_system_prompt()

    def _build_system_prompt(self) -> str:
        return f"""You are an expert content writer specializing in Battery Energy Storage Systems (BESS)
and the clean energy industry. You write for {COMPANY_NAME}, a leading BESS solutions provider.

Company Information:
{COMPANY_DESCRIPTION}

Website: {COMPANY_WEBSITE}

Your writing style is:
- Professional yet accessible
- Data-driven with specific statistics when relevant
- Focused on practical value for the reader
- SEO-optimized while maintaining natural readability
- Authoritative without being condescending

{SEO_GUIDELINES}

Always write original, high-quality content that provides genuine value to readers interested in
energy storage, grid modernization, and clean energy solutions."""

    def generate_post(
        self,
        topic: str,
        template_type: str = "educational",
        title_suggestion: Optional[str] = None,
        additional_context: Optional[str] = None,
    ) -> dict:
        """
        Generate a complete blog post.

        Args:
            topic: Topic key from TOPICS config (e.g., "grid_stability")
            template_type: Template type from BLOG_TEMPLATES
            title_suggestion: Optional title suggestion
            additional_context: Additional context or requirements

        Returns:
            Dictionary with title, meta_description, content, and metadata
        """
        if topic not in TOPICS:
            raise ValueError(f"Unknown topic: {topic}. Available: {list(TOPICS.keys())}")

        if template_type not in BLOG_TEMPLATES:
            raise ValueError(f"Unknown template: {template_type}. Available: {list(BLOG_TEMPLATES.keys())}")

        topic_info = TOPICS[topic]
        template = BLOG_TEMPLATES[template_type]

        prompt = self._build_generation_prompt(
            topic_info, template, title_suggestion, additional_context
        )

        response = self.client.messages.create(
            model=self.model,
            max_tokens=4096,
            system=self.system_prompt,
            messages=[{"role": "user", "content": prompt}],
        )

        content = response.content[0].text
        return self._parse_response(content, topic, template_type)

    def _build_generation_prompt(
        self,
        topic_info: dict,
        template: dict,
        title_suggestion: Optional[str],
        additional_context: Optional[str],
    ) -> str:
        prompt = f"""Write a comprehensive blog post about {topic_info['name']}.

Topic Description: {topic_info['description']}

Relevant Keywords to Incorporate: {', '.join(topic_info['keywords'])}

Content Template: {template['name']}
Target Word Count: {template['word_count']}
Desired Tone: {template['tone']}

Structure to Follow:
{template['structure']}
"""

        if title_suggestion:
            prompt += f"\nTitle Suggestion: {title_suggestion}\n"

        if additional_context:
            prompt += f"\nAdditional Requirements:\n{additional_context}\n"

        prompt += """
Please provide the response in the following format:

TITLE: [SEO-optimized title under 60 characters]

META_DESCRIPTION: [Compelling meta description, 150-160 characters]

CONTENT:
[Full blog post content with proper markdown formatting]

KEYWORDS: [Comma-separated list of 5-7 target keywords]
"""
        return prompt

    def _parse_response(self, response: str, topic: str, template_type: str) -> dict:
        """Parse the AI response into structured output."""
        sections = {}

        # Parse title
        if "TITLE:" in response:
            title_start = response.find("TITLE:") + 6
            title_end = response.find("\n", title_start)
            sections["title"] = response[title_start:title_end].strip()

        # Parse meta description
        if "META_DESCRIPTION:" in response:
            meta_start = response.find("META_DESCRIPTION:") + 17
            meta_end = response.find("\n", meta_start)
            sections["meta_description"] = response[meta_start:meta_end].strip()

        # Parse content
        if "CONTENT:" in response:
            content_start = response.find("CONTENT:") + 8
            content_end = response.find("KEYWORDS:", content_start) if "KEYWORDS:" in response else len(response)
            sections["content"] = response[content_start:content_end].strip()

        # Parse keywords
        if "KEYWORDS:" in response:
            keywords_start = response.find("KEYWORDS:") + 9
            keywords_text = response[keywords_start:].strip()
            sections["keywords"] = [k.strip() for k in keywords_text.split(",")]

        # Add metadata
        sections["metadata"] = {
            "topic": topic,
            "template_type": template_type,
            "generated_at": datetime.now().isoformat(),
            "model": self.model,
            "company": COMPANY_NAME,
        }

        return sections

    def save_post(self, post: dict, filename: Optional[str] = None) -> str:
        """Save the generated post to a file."""
        os.makedirs(BLOG_OUTPUT_DIR, exist_ok=True)

        if not filename:
            slug = post.get("title", "untitled").lower()
            slug = "".join(c if c.isalnum() or c == " " else "" for c in slug)
            slug = slug.replace(" ", "-")[:50]
            date_str = datetime.now().strftime("%Y-%m-%d")
            filename = f"{date_str}-{slug}"

        # Save markdown content
        md_path = os.path.join(BLOG_OUTPUT_DIR, f"{filename}.md")
        with open(md_path, "w") as f:
            f.write(f"# {post.get('title', 'Untitled')}\n\n")
            f.write(f"*{post.get('meta_description', '')}*\n\n")
            f.write("---\n\n")
            f.write(post.get("content", ""))

        # Save metadata as JSON
        json_path = os.path.join(BLOG_OUTPUT_DIR, f"{filename}.json")
        with open(json_path, "w") as f:
            json.dump(post, f, indent=2)

        return md_path


def main():
    """Example usage of the BlogAgent."""
    from rich.console import Console
    from rich.markdown import Markdown

    console = Console()

    console.print("[bold blue]Blog Post Generator[/bold blue]")
    console.print("=" * 50)

    # Check for API key
    if not ANTHROPIC_API_KEY:
        console.print("[red]Error: ANTHROPIC_API_KEY not set in environment[/red]")
        console.print("Create a .env file with your API key or set the environment variable.")
        return

    agent = BlogAgent()

    # Example: Generate an educational post about grid stability
    console.print("\n[yellow]Generating blog post about Grid Stability...[/yellow]\n")

    try:
        post = agent.generate_post(
            topic="grid_stability",
            template_type="educational",
            additional_context="Focus on how BESS provides frequency regulation services."
        )

        console.print(f"[green]Title:[/green] {post.get('title')}")
        console.print(f"[green]Meta:[/green] {post.get('meta_description')}")
        console.print(f"[green]Keywords:[/green] {', '.join(post.get('keywords', []))}")
        console.print("\n[green]Content Preview:[/green]")
        console.print(Markdown(post.get("content", "")[:1000] + "..."))

        # Save the post
        filepath = agent.save_post(post)
        console.print(f"\n[blue]Saved to:[/blue] {filepath}")

    except Exception as e:
        console.print(f"[red]Error generating post: {e}[/red]")


if __name__ == "__main__":
    main()
