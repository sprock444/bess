"""LinkedIn post templates for different content types."""

LINKEDIN_TEMPLATES = {
    "insight": {
        "name": "Industry Insight",
        "structure": """
[Hook - Surprising stat or bold statement]

[2-3 sentences expanding on the insight]

[Why this matters for your audience]

[Your perspective or take]

[Call to action or question]

#hashtags
""",
        "character_limit": 1300,
        "tone": "Professional, insightful, engaging"
    },

    "story": {
        "name": "Story/Experience",
        "structure": """
[Attention-grabbing opening line]

[Set the scene - what happened]

[The challenge or turning point]

[The lesson or outcome]

[How this applies to the reader]

[Engagement question]

#hashtags
""",
        "character_limit": 1300,
        "tone": "Personal, authentic, relatable"
    },

    "tips": {
        "name": "Tips & Advice",
        "structure": """
[Topic introduction - why these tips matter]

Here's what I've learned:

1️⃣ [Tip 1 - concise and actionable]

2️⃣ [Tip 2 - concise and actionable]

3️⃣ [Tip 3 - concise and actionable]

4️⃣ [Tip 4 - concise and actionable]

5️⃣ [Tip 5 - concise and actionable]

[Closing thought or question]

#hashtags
""",
        "character_limit": 1300,
        "tone": "Helpful, practical, authoritative"
    },

    "question": {
        "name": "Engagement Question",
        "structure": """
[Thought-provoking question or scenario]

[Brief context - why you're asking]

[Your initial thoughts or perspective]

[Open-ended question to drive comments]

#hashtags
""",
        "character_limit": 700,
        "tone": "Curious, conversational, inclusive"
    },

    "announcement": {
        "name": "Company/Industry Announcement",
        "structure": """
[Exciting news hook]

[What's happening]

[Why it matters]

[Impact or benefits]

[What's next]

[Call to action]

#hashtags
""",
        "character_limit": 1000,
        "tone": "Enthusiastic, professional, forward-looking"
    },

    "data_driven": {
        "name": "Data/Statistics Post",
        "structure": """
[Striking statistic or data point]

📊 [Additional supporting data]

What this means:
→ [Implication 1]
→ [Implication 2]
→ [Implication 3]

[Your interpretation or call to action]

[Question for engagement]

#hashtags
""",
        "character_limit": 1000,
        "tone": "Analytical, credible, thought-provoking"
    },

    "carousel_intro": {
        "name": "Carousel Post Introduction",
        "structure": """
[Hook that makes people want to swipe]

In this carousel, you'll learn:
✅ [Point 1]
✅ [Point 2]
✅ [Point 3]
✅ [Point 4]

Save this for later ⬇️

#hashtags
""",
        "character_limit": 500,
        "tone": "Engaging, value-packed, action-oriented"
    }
}

LINKEDIN_BEST_PRACTICES = """
LinkedIn Content Best Practices:

1. HOOK (First 2 lines):
   - Must grab attention before "see more"
   - Use a surprising stat, bold claim, or question
   - Create curiosity gap

2. FORMATTING:
   - Use line breaks for readability
   - Keep paragraphs to 1-2 lines
   - Use emojis sparingly (1-3 per post)
   - Bullet points and numbered lists work well

3. LENGTH:
   - Optimal: 1,200-1,500 characters for engagement
   - Can go up to 3,000 for valuable content
   - Short posts (under 500) for questions/quick insights

4. HASHTAGS:
   - Use 3-5 relevant hashtags
   - Mix of broad (#energystorage) and niche (#BESSproject)
   - Place at the end of the post

5. ENGAGEMENT:
   - Ask questions to prompt comments
   - Respond to comments within first hour
   - Tag relevant people/companies when appropriate

6. TIMING:
   - Best times: Tuesday-Thursday, 8-10am or 12pm
   - Avoid weekends for B2B content
   - Post consistently (3-5x per week ideal)

7. CONTENT MIX:
   - 80% value, 20% promotional
   - Vary post types (insights, stories, tips)
   - Share original perspectives, not just news
"""

BESS_HASHTAGS = {
    "primary": [
        "#EnergyStorage",
        "#BESS",
        "#BatteryStorage",
        "#CleanEnergy",
        "#RenewableEnergy"
    ],
    "technical": [
        "#GridScale",
        "#GridStorage",
        "#EnergyTransition",
        "#PowerSystems",
        "#SmartGrid"
    ],
    "business": [
        "#Sustainability",
        "#CleanTech",
        "#EnergyIndustry",
        "#Utilities",
        "#Infrastructure"
    ],
    "trending": [
        "#NetZero",
        "#Decarbonization",
        "#ESG",
        "#GreenEnergy",
        "#FutureOfEnergy"
    ]
}
