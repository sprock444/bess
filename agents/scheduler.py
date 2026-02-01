"""Content scheduling system for automated content generation."""

import os
import json
import random
import schedule
import time
from datetime import datetime, timedelta
from typing import Optional, List, Callable
from dataclasses import dataclass, asdict

from config import TOPICS, OUTPUT_DIR
from blog_agent import BlogAgent
from linkedin_agent import LinkedInAgent


@dataclass
class ScheduledTask:
    """Represents a scheduled content generation task."""
    task_id: str
    task_type: str  # "blog" or "linkedin"
    topic: str
    template_type: str
    scheduled_time: str
    status: str  # "pending", "completed", "failed"
    created_at: str
    completed_at: Optional[str] = None
    output_file: Optional[str] = None
    error: Optional[str] = None


class ContentScheduler:
    """Scheduler for automated content generation."""

    def __init__(self):
        self.blog_agent = None
        self.linkedin_agent = None
        self.tasks: List[ScheduledTask] = []
        self.schedule_file = os.path.join(OUTPUT_DIR, "schedule.json")
        self._load_schedule()

    def _init_agents(self):
        """Initialize agents lazily."""
        if self.blog_agent is None:
            self.blog_agent = BlogAgent()
        if self.linkedin_agent is None:
            self.linkedin_agent = LinkedInAgent()

    def _load_schedule(self):
        """Load scheduled tasks from file."""
        if os.path.exists(self.schedule_file):
            try:
                with open(self.schedule_file, "r") as f:
                    data = json.load(f)
                    self.tasks = [ScheduledTask(**task) for task in data]
            except Exception as e:
                print(f"Error loading schedule: {e}")
                self.tasks = []

    def _save_schedule(self):
        """Save scheduled tasks to file."""
        os.makedirs(OUTPUT_DIR, exist_ok=True)
        with open(self.schedule_file, "w") as f:
            json.dump([asdict(task) for task in self.tasks], f, indent=2)

    def _generate_task_id(self) -> str:
        """Generate a unique task ID."""
        return f"task_{datetime.now().strftime('%Y%m%d%H%M%S')}_{random.randint(1000, 9999)}"

    def schedule_blog_post(
        self,
        topic: str,
        template_type: str = "educational",
        scheduled_time: Optional[datetime] = None,
    ) -> ScheduledTask:
        """
        Schedule a blog post for generation.

        Args:
            topic: Topic key from TOPICS config
            template_type: Blog template type
            scheduled_time: When to generate (None = immediate)

        Returns:
            ScheduledTask object
        """
        if scheduled_time is None:
            scheduled_time = datetime.now()

        task = ScheduledTask(
            task_id=self._generate_task_id(),
            task_type="blog",
            topic=topic,
            template_type=template_type,
            scheduled_time=scheduled_time.isoformat(),
            status="pending",
            created_at=datetime.now().isoformat(),
        )
        self.tasks.append(task)
        self._save_schedule()
        return task

    def schedule_linkedin_post(
        self,
        topic: str,
        template_type: str = "insight",
        scheduled_time: Optional[datetime] = None,
    ) -> ScheduledTask:
        """
        Schedule a LinkedIn post for generation.

        Args:
            topic: Topic key from TOPICS config
            template_type: LinkedIn template type
            scheduled_time: When to generate (None = immediate)

        Returns:
            ScheduledTask object
        """
        if scheduled_time is None:
            scheduled_time = datetime.now()

        task = ScheduledTask(
            task_id=self._generate_task_id(),
            task_type="linkedin",
            template_type=template_type,
            topic=topic,
            scheduled_time=scheduled_time.isoformat(),
            status="pending",
            created_at=datetime.now().isoformat(),
        )
        self.tasks.append(task)
        self._save_schedule()
        return task

    def schedule_content_calendar(
        self,
        weeks: int = 4,
        blog_posts_per_week: int = 2,
        linkedin_posts_per_week: int = 3,
    ) -> List[ScheduledTask]:
        """
        Generate a content calendar for multiple weeks.

        Args:
            weeks: Number of weeks to schedule
            blog_posts_per_week: Blog posts per week
            linkedin_posts_per_week: LinkedIn posts per week

        Returns:
            List of scheduled tasks
        """
        new_tasks = []
        topics = list(TOPICS.keys())
        blog_templates = ["educational", "thought_leadership", "how_to_guide"]
        linkedin_templates = ["insight", "tips", "data_driven", "story"]

        start_date = datetime.now()

        for week in range(weeks):
            week_start = start_date + timedelta(weeks=week)

            # Schedule blog posts (e.g., Tuesday and Thursday)
            for i in range(blog_posts_per_week):
                post_day = week_start + timedelta(days=(i * 2) + 1)  # Tue, Thu
                post_time = post_day.replace(hour=9, minute=0, second=0)

                task = self.schedule_blog_post(
                    topic=random.choice(topics),
                    template_type=random.choice(blog_templates),
                    scheduled_time=post_time,
                )
                new_tasks.append(task)

            # Schedule LinkedIn posts (Mon, Wed, Fri)
            for i in range(linkedin_posts_per_week):
                post_day = week_start + timedelta(days=(i * 2))  # Mon, Wed, Fri
                post_time = post_day.replace(hour=8, minute=30, second=0)

                task = self.schedule_linkedin_post(
                    topic=random.choice(topics),
                    template_type=random.choice(linkedin_templates),
                    scheduled_time=post_time,
                )
                new_tasks.append(task)

        return new_tasks

    def execute_task(self, task: ScheduledTask) -> ScheduledTask:
        """Execute a single scheduled task."""
        self._init_agents()

        try:
            if task.task_type == "blog":
                post = self.blog_agent.generate_post(
                    topic=task.topic,
                    template_type=task.template_type,
                )
                output_file = self.blog_agent.save_post(post)
            else:  # linkedin
                post = self.linkedin_agent.generate_post(
                    topic=task.topic,
                    template_type=task.template_type,
                )
                output_file = self.linkedin_agent.save_post(post)

            task.status = "completed"
            task.completed_at = datetime.now().isoformat()
            task.output_file = output_file

        except Exception as e:
            task.status = "failed"
            task.error = str(e)

        self._save_schedule()
        return task

    def execute_pending_tasks(self) -> List[ScheduledTask]:
        """Execute all pending tasks that are due."""
        now = datetime.now()
        executed = []

        for task in self.tasks:
            if task.status != "pending":
                continue

            scheduled = datetime.fromisoformat(task.scheduled_time)
            if scheduled <= now:
                print(f"Executing task: {task.task_id} ({task.task_type})")
                self.execute_task(task)
                executed.append(task)

        return executed

    def get_pending_tasks(self) -> List[ScheduledTask]:
        """Get all pending tasks."""
        return [t for t in self.tasks if t.status == "pending"]

    def get_completed_tasks(self) -> List[ScheduledTask]:
        """Get all completed tasks."""
        return [t for t in self.tasks if t.status == "completed"]

    def clear_completed_tasks(self):
        """Remove completed tasks from the schedule."""
        self.tasks = [t for t in self.tasks if t.status != "completed"]
        self._save_schedule()

    def run_daemon(self, check_interval: int = 60):
        """
        Run as a daemon, checking for and executing tasks.

        Args:
            check_interval: Seconds between checks
        """
        print(f"Starting content scheduler daemon (checking every {check_interval}s)")
        print("Press Ctrl+C to stop")

        schedule.every(check_interval).seconds.do(self.execute_pending_tasks)

        try:
            while True:
                schedule.run_pending()
                time.sleep(1)
        except KeyboardInterrupt:
            print("\nScheduler stopped")


def main():
    """Example usage of the ContentScheduler."""
    from rich.console import Console
    from rich.table import Table

    console = Console()

    console.print("[bold blue]Content Scheduler[/bold blue]")
    console.print("=" * 50)

    scheduler = ContentScheduler()

    # Show current schedule
    pending = scheduler.get_pending_tasks()
    completed = scheduler.get_completed_tasks()

    table = Table(title="Scheduled Tasks")
    table.add_column("ID", style="cyan")
    table.add_column("Type", style="magenta")
    table.add_column("Topic", style="green")
    table.add_column("Template", style="yellow")
    table.add_column("Scheduled", style="blue")
    table.add_column("Status", style="red")

    for task in scheduler.tasks[-10:]:  # Show last 10
        table.add_row(
            task.task_id[-8:],
            task.task_type,
            task.topic,
            task.template_type,
            task.scheduled_time[:16],
            task.status,
        )

    console.print(table)

    console.print(f"\n[green]Pending:[/green] {len(pending)} tasks")
    console.print(f"[blue]Completed:[/blue] {len(completed)} tasks")


if __name__ == "__main__":
    main()
