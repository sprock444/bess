#!/usr/bin/env python3
"""
BESS Content Generation System

A CLI tool for generating SEO-optimized blog posts and LinkedIn content
about Battery Energy Storage Systems using AI.
"""

import argparse
import sys
from datetime import datetime, timedelta
from rich.console import Console
from rich.table import Table
from rich.panel import Panel
from rich.markdown import Markdown

from config import TOPICS, ANTHROPIC_API_KEY
from blog_agent import BlogAgent
from linkedin_agent import LinkedInAgent
from scheduler import ContentScheduler
from templates.blog_templates import BLOG_TEMPLATES
from templates.linkedin_templates import LINKEDIN_TEMPLATES


console = Console()


def check_api_key():
    """Check if API key is configured."""
    if not ANTHROPIC_API_KEY:
        console.print("[red]Error: ANTHROPIC_API_KEY not set[/red]")
        console.print("\nTo configure:")
        console.print("1. Copy .env.example to .env")
        console.print("2. Add your Anthropic API key")
        sys.exit(1)


def list_topics():
    """Display available topics."""
    table = Table(title="Available Topics")
    table.add_column("Key", style="cyan")
    table.add_column("Name", style="green")
    table.add_column("Description", style="white")

    for key, info in TOPICS.items():
        table.add_row(key, info["name"], info["description"][:60] + "...")

    console.print(table)


def list_templates(content_type: str):
    """Display available templates."""
    templates = BLOG_TEMPLATES if content_type == "blog" else LINKEDIN_TEMPLATES

    table = Table(title=f"{content_type.title()} Templates")
    table.add_column("Key", style="cyan")
    table.add_column("Name", style="green")
    table.add_column("Tone", style="yellow")

    for key, info in templates.items():
        table.add_row(key, info["name"], info["tone"])

    console.print(table)


def generate_blog(args):
    """Generate a blog post."""
    check_api_key()

    console.print(f"\n[yellow]Generating blog post...[/yellow]")
    console.print(f"Topic: {args.topic}")
    console.print(f"Template: {args.template}")

    agent = BlogAgent()

    try:
        post = agent.generate_post(
            topic=args.topic,
            template_type=args.template,
            title_suggestion=args.title,
            additional_context=args.context,
        )

        console.print("\n" + "=" * 60)
        console.print(f"[bold green]Title:[/bold green] {post.get('title')}")
        console.print(f"[green]Meta:[/green] {post.get('meta_description')}")
        console.print(f"[green]Keywords:[/green] {', '.join(post.get('keywords', []))}")

        if args.preview:
            console.print("\n[bold]Content Preview:[/bold]")
            console.print(Markdown(post.get("content", "")[:1500] + "\n\n..."))
        else:
            console.print("\n[bold]Full Content:[/bold]")
            console.print(Markdown(post.get("content", "")))

        if args.save:
            filepath = agent.save_post(post)
            console.print(f"\n[blue]Saved to:[/blue] {filepath}")

    except ValueError as e:
        console.print(f"[red]Error: {e}[/red]")
        sys.exit(1)
    except Exception as e:
        console.print(f"[red]Error generating post: {e}[/red]")
        sys.exit(1)


def generate_linkedin(args):
    """Generate a LinkedIn post."""
    check_api_key()

    console.print(f"\n[yellow]Generating LinkedIn post...[/yellow]")
    console.print(f"Topic: {args.topic}")
    console.print(f"Template: {args.template}")

    agent = LinkedInAgent()

    try:
        post = agent.generate_post(
            topic=args.topic,
            template_type=args.template,
            hook_suggestion=args.hook,
            additional_context=args.context,
        )

        console.print("\n" + "=" * 60)
        console.print(Panel(
            post.get("content", ""),
            title="[green]Generated Post[/green]",
            border_style="green",
        ))

        console.print(f"\n[blue]Hook:[/blue] {post.get('hook', 'N/A')}")
        console.print(f"[blue]CTA:[/blue] {post.get('cta', 'N/A')}")
        console.print(f"[blue]Characters:[/blue] {post.get('metadata', {}).get('character_count', 0)}")

        if args.save:
            filepath = agent.save_post(post)
            console.print(f"\n[blue]Saved to:[/blue] {filepath}")

    except ValueError as e:
        console.print(f"[red]Error: {e}[/red]")
        sys.exit(1)
    except Exception as e:
        console.print(f"[red]Error generating post: {e}[/red]")
        sys.exit(1)


def schedule_content(args):
    """Schedule content generation."""
    scheduler = ContentScheduler()

    if args.calendar:
        # Generate a content calendar
        console.print(f"\n[yellow]Creating {args.weeks}-week content calendar...[/yellow]")
        tasks = scheduler.schedule_content_calendar(
            weeks=args.weeks,
            blog_posts_per_week=args.blogs_per_week,
            linkedin_posts_per_week=args.linkedin_per_week,
        )
        console.print(f"[green]Scheduled {len(tasks)} tasks[/green]")

    elif args.type and args.topic:
        # Schedule a single item
        scheduled_time = None
        if args.time:
            try:
                scheduled_time = datetime.fromisoformat(args.time)
            except ValueError:
                console.print("[red]Invalid time format. Use ISO format: YYYY-MM-DDTHH:MM:SS[/red]")
                sys.exit(1)

        if args.type == "blog":
            task = scheduler.schedule_blog_post(
                topic=args.topic,
                template_type=args.template or "educational",
                scheduled_time=scheduled_time,
            )
        else:
            task = scheduler.schedule_linkedin_post(
                topic=args.topic,
                template_type=args.template or "insight",
                scheduled_time=scheduled_time,
            )

        console.print(f"[green]Scheduled task: {task.task_id}[/green]")

    # Show schedule
    show_schedule(scheduler)


def show_schedule(scheduler: ContentScheduler = None):
    """Display the current schedule."""
    if scheduler is None:
        scheduler = ContentScheduler()

    table = Table(title="Content Schedule")
    table.add_column("ID", style="cyan")
    table.add_column("Type", style="magenta")
    table.add_column("Topic", style="green")
    table.add_column("Template", style="yellow")
    table.add_column("Scheduled", style="blue")
    table.add_column("Status", style="red")

    for task in scheduler.tasks[-20:]:
        status_style = {
            "pending": "yellow",
            "completed": "green",
            "failed": "red",
        }.get(task.status, "white")

        table.add_row(
            task.task_id[-8:],
            task.task_type,
            task.topic,
            task.template_type,
            task.scheduled_time[:16],
            f"[{status_style}]{task.status}[/{status_style}]",
        )

    console.print(table)

    pending = len(scheduler.get_pending_tasks())
    completed = len(scheduler.get_completed_tasks())
    console.print(f"\n[yellow]Pending:[/yellow] {pending} | [green]Completed:[/green] {completed}")


def run_scheduler(args):
    """Run the scheduler daemon."""
    check_api_key()

    scheduler = ContentScheduler()

    if args.execute_now:
        console.print("[yellow]Executing pending tasks...[/yellow]")
        executed = scheduler.execute_pending_tasks()
        console.print(f"[green]Executed {len(executed)} tasks[/green]")
    else:
        scheduler.run_daemon(check_interval=args.interval)


def main():
    parser = argparse.ArgumentParser(
        description="BESS Content Generation System",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    subparsers = parser.add_subparsers(dest="command", help="Commands")

    # List command
    list_parser = subparsers.add_parser("list", help="List available topics and templates")
    list_parser.add_argument("--topics", action="store_true", help="List topics")
    list_parser.add_argument("--blog-templates", action="store_true", help="List blog templates")
    list_parser.add_argument("--linkedin-templates", action="store_true", help="List LinkedIn templates")

    # Blog command
    blog_parser = subparsers.add_parser("blog", help="Generate a blog post")
    blog_parser.add_argument("topic", help="Topic key (use 'list --topics' to see options)")
    blog_parser.add_argument("--template", "-t", default="educational", help="Template type")
    blog_parser.add_argument("--title", help="Suggested title")
    blog_parser.add_argument("--context", "-c", help="Additional context")
    blog_parser.add_argument("--save", "-s", action="store_true", help="Save to file")
    blog_parser.add_argument("--preview", "-p", action="store_true", help="Show preview only")

    # LinkedIn command
    linkedin_parser = subparsers.add_parser("linkedin", help="Generate a LinkedIn post")
    linkedin_parser.add_argument("topic", help="Topic key")
    linkedin_parser.add_argument("--template", "-t", default="insight", help="Template type")
    linkedin_parser.add_argument("--hook", help="Suggested hook/opening")
    linkedin_parser.add_argument("--context", "-c", help="Additional context")
    linkedin_parser.add_argument("--save", "-s", action="store_true", help="Save to file")

    # Schedule command
    schedule_parser = subparsers.add_parser("schedule", help="Schedule content generation")
    schedule_parser.add_argument("--type", choices=["blog", "linkedin"], help="Content type")
    schedule_parser.add_argument("--topic", help="Topic key")
    schedule_parser.add_argument("--template", help="Template type")
    schedule_parser.add_argument("--time", help="Scheduled time (ISO format)")
    schedule_parser.add_argument("--calendar", action="store_true", help="Generate content calendar")
    schedule_parser.add_argument("--weeks", type=int, default=4, help="Weeks to schedule")
    schedule_parser.add_argument("--blogs-per-week", type=int, default=2, help="Blog posts per week")
    schedule_parser.add_argument("--linkedin-per-week", type=int, default=3, help="LinkedIn posts per week")

    # Run command
    run_parser = subparsers.add_parser("run", help="Run the scheduler")
    run_parser.add_argument("--execute-now", action="store_true", help="Execute pending tasks immediately")
    run_parser.add_argument("--interval", type=int, default=60, help="Check interval in seconds")

    # Status command
    subparsers.add_parser("status", help="Show schedule status")

    args = parser.parse_args()

    # Header
    console.print("\n[bold blue]🔋 BESS Content Generation System[/bold blue]")
    console.print("=" * 50)

    if args.command == "list":
        if args.topics or not (args.blog_templates or args.linkedin_templates):
            list_topics()
        if args.blog_templates:
            list_templates("blog")
        if args.linkedin_templates:
            list_templates("linkedin")

    elif args.command == "blog":
        generate_blog(args)

    elif args.command == "linkedin":
        generate_linkedin(args)

    elif args.command == "schedule":
        schedule_content(args)

    elif args.command == "run":
        run_scheduler(args)

    elif args.command == "status":
        show_schedule()

    else:
        parser.print_help()


if __name__ == "__main__":
    main()
