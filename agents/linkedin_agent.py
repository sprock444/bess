"""LinkedIn post generation agent using Anthropic API."""

import os
import json
import random
from datetime import datetime
from typing import Optional, List
from anthropic import Anthropic

from config import (
    ANTHROPIC_API_KEY,
    DEFAULT_MODEL,
    COMPANY_NAME,
    COMPANY_WEBSITE,
    COMPANY_DESCRIPTION,
    TOPICS,
    LINKEDIN_OUTPUT_DIR,
)
from templates.linkedin_templates import (
    LINKEDIN_TEMPLATES,
    LINKEDIN_BEST_PRACTICES,
    BESS_HASHTAGS,
)


class LinkedInAgent:
    """Agent for generating engaging LinkedIn posts about BESS technology."""

    def __init__(self, model: str = DEFAULT_MODEL):
        self.client = Anthropic(api_key=ANTHROPIC_API_KEY)
        self.model = model
        self.system_prompt = self._build_system_prompt()

    def _build_system_prompt(self) -> str:
        return f"""You are a LinkedIn content strategist and writer for {COMPANY_NAME},
a leading Battery Energy Storage System (BESS) solutions provider.

Company Information:
{COMPANY_DESCRIPTION}

Website: {COMPANY_WEBSITE}

Your writing style for LinkedIn:
- Conversational yet professional
- Engaging hooks that stop the scroll
- Value-driven content that educates
- Authentic voice that builds trust
- Strategic use of formatting for readability

{LINKEDIN_BEST_PRACTICES}

Write posts that drive engagement, establish thought leadership, and position {COMPANY_NAME}
as an industry authority in energy storage and clean energy solutions."""

    def generate_post(
        self,
        topic: str,
        template_type: str = "insight",
        hook_suggestion: Optional[str] = None,
        additional_context: Optional[str] = None,
        include_hashtags: bool = True,
    ) -> dict:
        """
        Generate a LinkedIn post.

        Args:
            topic: Topic key from TOPICS config
            template_type: Template type from LINKEDIN_TEMPLATES
            hook_suggestion: Optional hook/opening line suggestion
            additional_context: Additional context or requirements
            include_hashtags: Whether to include hashtag suggestions

        Returns:
            Dictionary with post content and metadata
        """
        if topic not in TOPICS:
            raise ValueError(f"Unknown topic: {topic}. Available: {list(TOPICS.keys())}")

        if template_type not in LINKEDIN_TEMPLATES:
            raise ValueError(f"Unknown template: {template_type}. Available: {list(LINKEDIN_TEMPLATES.keys())}")

        topic_info = TOPICS[topic]
        template = LINKEDIN_TEMPLATES[template_type]

        prompt = self._build_generation_prompt(
            topic_info, template, hook_suggestion, additional_context
        )

        response = self.client.messages.create(
            model=self.model,
            max_tokens=1500,
            system=self.system_prompt,
            messages=[{"role": "user", "content": prompt}],
        )

        content = response.content[0].text
        return self._parse_response(content, topic, template_type, include_hashtags)

    def _build_generation_prompt(
        self,
        topic_info: dict,
        template: dict,
        hook_suggestion: Optional[str],
        additional_context: Optional[str],
    ) -> str:
        prompt = f"""Write a LinkedIn post about {topic_info['name']}.

Topic Description: {topic_info['description']}

Relevant Themes: {', '.join(topic_info['keywords'][:5])}

Post Type: {template['name']}
Character Limit: {template['character_limit']}
Desired Tone: {template['tone']}

Structure to Follow:
{template['structure']}
"""

        if hook_suggestion:
            prompt += f"\nHook/Opening Suggestion: {hook_suggestion}\n"

        if additional_context:
            prompt += f"\nAdditional Requirements:\n{additional_context}\n"

        prompt += """
Please provide the response in the following format:

POST:
[Full LinkedIn post content with proper formatting, line breaks, and emojis where appropriate]

HOOK: [Just the first 1-2 lines that appear before "see more"]

CTA: [The call-to-action or engagement question]
"""
        return prompt

    def _parse_response(
        self, response: str, topic: str, template_type: str, include_hashtags: bool
    ) -> dict:
        """Parse the AI response into structured output."""
        sections = {}

        # Parse post content
        if "POST:" in response:
            post_start = response.find("POST:") + 5
            post_end = response.find("HOOK:", post_start) if "HOOK:" in response else len(response)
            sections["content"] = response[post_start:post_end].strip()

        # Parse hook
        if "HOOK:" in response:
            hook_start = response.find("HOOK:") + 5
            hook_end = response.find("CTA:", hook_start) if "CTA:" in response else len(response)
            sections["hook"] = response[hook_start:hook_end].strip()

        # Parse CTA
        if "CTA:" in response:
            cta_start = response.find("CTA:") + 4
            sections["cta"] = response[cta_start:].strip()

        # Add hashtags
        if include_hashtags:
            sections["hashtags"] = self._select_hashtags(topic)
            # Append hashtags to content if not already present
            if sections.get("content") and "#" not in sections["content"]:
                hashtag_str = " ".join(sections["hashtags"])
                sections["content"] += f"\n\n{hashtag_str}"

        # Add metadata
        sections["metadata"] = {
            "topic": topic,
            "template_type": template_type,
            "generated_at": datetime.now().isoformat(),
            "model": self.model,
            "company": COMPANY_NAME,
            "character_count": len(sections.get("content", "")),
        }

        return sections

    def _select_hashtags(self, topic: str, count: int = 5) -> List[str]:
        """Select relevant hashtags for the post."""
        hashtags = []

        # Always include 1-2 primary hashtags
        hashtags.extend(random.sample(BESS_HASHTAGS["primary"], min(2, len(BESS_HASHTAGS["primary"]))))

        # Add topic-relevant hashtags
        remaining = count - len(hashtags)
        other_tags = (
            BESS_HASHTAGS["technical"]
            + BESS_HASHTAGS["business"]
            + BESS_HASHTAGS["trending"]
        )
        hashtags.extend(random.sample(other_tags, min(remaining, len(other_tags))))

        return hashtags[:count]

    def generate_batch(
        self,
        topics: Optional[List[str]] = None,
        template_types: Optional[List[str]] = None,
        count: int = 5,
    ) -> List[dict]:
        """
        Generate multiple LinkedIn posts.

        Args:
            topics: List of topics to use (random if None)
            template_types: List of templates to use (random if None)
            count: Number of posts to generate

        Returns:
            List of generated posts
        """
        if not topics:
            topics = list(TOPICS.keys())
        if not template_types:
            template_types = list(LINKEDIN_TEMPLATES.keys())

        posts = []
        for i in range(count):
            topic = random.choice(topics)
            template = random.choice(template_types)

            try:
                post = self.generate_post(topic=topic, template_type=template)
                posts.append(post)
            except Exception as e:
                print(f"Error generating post {i+1}: {e}")

        return posts

    def save_post(self, post: dict, filename: Optional[str] = None) -> str:
        """Save the generated post to a file."""
        os.makedirs(LINKEDIN_OUTPUT_DIR, exist_ok=True)

        if not filename:
            date_str = datetime.now().strftime("%Y-%m-%d-%H%M")
            topic = post.get("metadata", {}).get("topic", "general")
            filename = f"{date_str}-{topic}"

        # Save as text file (ready to copy-paste)
        txt_path = os.path.join(LINKEDIN_OUTPUT_DIR, f"{filename}.txt")
        with open(txt_path, "w") as f:
            f.write(post.get("content", ""))

        # Save metadata as JSON
        json_path = os.path.join(LINKEDIN_OUTPUT_DIR, f"{filename}.json")
        with open(json_path, "w") as f:
            json.dump(post, f, indent=2)

        return txt_path


def main():
    """Example usage of the LinkedInAgent."""
    from rich.console import Console
    from rich.panel import Panel

    console = Console()

    console.print("[bold blue]LinkedIn Post Generator[/bold blue]")
    console.print("=" * 50)

    # Check for API key
    if not ANTHROPIC_API_KEY:
        console.print("[red]Error: ANTHROPIC_API_KEY not set in environment[/red]")
        console.print("Create a .env file with your API key or set the environment variable.")
        return

    agent = LinkedInAgent()

    # Example: Generate an insight post about renewable integration
    console.print("\n[yellow]Generating LinkedIn post about Renewable Integration...[/yellow]\n")

    try:
        post = agent.generate_post(
            topic="renewable_integration",
            template_type="insight",
            additional_context="Focus on solar-plus-storage trends for 2025."
        )

        console.print(Panel(
            post.get("content", ""),
            title="[green]Generated Post[/green]",
            border_style="green"
        ))

        console.print(f"\n[blue]Hook:[/blue] {post.get('hook', 'N/A')}")
        console.print(f"[blue]CTA:[/blue] {post.get('cta', 'N/A')}")
        console.print(f"[blue]Character Count:[/blue] {post.get('metadata', {}).get('character_count', 0)}")

        # Save the post
        filepath = agent.save_post(post)
        console.print(f"\n[blue]Saved to:[/blue] {filepath}")

    except Exception as e:
        console.print(f"[red]Error generating post: {e}[/red]")


if __name__ == "__main__":
    main()
