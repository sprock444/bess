"""Blog post templates for different content types."""

BLOG_TEMPLATES = {
    "educational": {
        "name": "Educational Deep Dive",
        "structure": """
## Introduction
- Hook the reader with a compelling statistic or question
- Establish the problem or opportunity
- Preview what the article will cover

## Section 1: Understanding the Basics
- Define key concepts
- Explain the fundamentals
- Use analogies for complex topics

## Section 2: The Current Landscape
- Industry trends and data
- Market dynamics
- Challenges and opportunities

## Section 3: Practical Applications
- Real-world examples
- Case study or scenario
- Implementation considerations

## Section 4: Benefits and ROI
- Quantifiable benefits
- Financial impact
- Long-term value

## Conclusion
- Key takeaways (3-5 bullet points)
- Call to action
- Forward-looking statement
""",
        "word_count": "1500-2000",
        "tone": "Informative, authoritative, accessible"
    },

    "thought_leadership": {
        "name": "Thought Leadership",
        "structure": """
## Opening Statement
- Bold perspective or prediction
- Why this matters now

## The Shift Happening
- Industry transformation
- Data and evidence
- Expert insights

## Our Perspective
- Unique viewpoint
- Supporting arguments
- Contrarian or forward-thinking angle

## Implications for the Industry
- What this means for stakeholders
- Opportunities to seize
- Risks to mitigate

## The Path Forward
- Recommendations
- Action items
- Vision for the future

## Closing Thought
- Memorable conclusion
- Call to engage
""",
        "word_count": "1200-1500",
        "tone": "Visionary, confident, provocative"
    },

    "how_to_guide": {
        "name": "How-To Guide",
        "structure": """
## Introduction
- What you'll learn
- Why this matters
- Prerequisites or context

## Step 1: [Foundation]
- Detailed explanation
- Tips and best practices
- Common mistakes to avoid

## Step 2: [Implementation]
- Actionable instructions
- Tools or resources needed
- Expected outcomes

## Step 3: [Optimization]
- Fine-tuning approaches
- Advanced techniques
- Measuring success

## Step 4: [Scaling]
- Growing the solution
- Long-term considerations
- Future enhancements

## Summary Checklist
- Quick reference list
- Key action items
- Resources for further learning
""",
        "word_count": "1800-2500",
        "tone": "Practical, detailed, helpful"
    },

    "news_analysis": {
        "name": "Industry News Analysis",
        "structure": """
## The News
- What happened
- Key details and context
- Relevant parties involved

## Why It Matters
- Industry significance
- Market implications
- Stakeholder impact

## Our Analysis
- Expert interpretation
- Connecting the dots
- Hidden implications

## What to Watch
- Future developments
- Key indicators
- Timeline expectations

## Action Items
- What readers should do
- Opportunities to consider
- Risks to monitor
""",
        "word_count": "800-1200",
        "tone": "Analytical, timely, insightful"
    },

    "case_study": {
        "name": "Case Study",
        "structure": """
## Executive Summary
- Project overview
- Key results (headline numbers)
- Why this case matters

## The Challenge
- Client background
- Problem statement
- Goals and requirements

## The Solution
- Approach taken
- Technology deployed
- Implementation process

## Results & Impact
- Quantified outcomes
- Before/after comparison
- ROI achieved

## Lessons Learned
- Key success factors
- Challenges overcome
- Recommendations

## Conclusion
- Summary of value delivered
- Applicability to other scenarios
- Call to action
""",
        "word_count": "1200-1800",
        "tone": "Results-focused, credible, compelling"
    }
}

SEO_GUIDELINES = """
SEO Best Practices for Blog Posts:

1. TITLE:
   - Include primary keyword near the beginning
   - Keep under 60 characters
   - Make it compelling and click-worthy
   - Use numbers or power words when appropriate

2. META DESCRIPTION:
   - 150-160 characters
   - Include primary keyword naturally
   - Compelling summary with value proposition
   - Include a subtle call to action

3. HEADINGS:
   - Use H2 for main sections, H3 for subsections
   - Include keywords naturally in headings
   - Make headings scannable and descriptive

4. CONTENT:
   - Primary keyword in first 100 words
   - Keyword density: 1-2% (natural usage)
   - Use related keywords and synonyms
   - Include internal links to other content
   - Add external links to authoritative sources

5. STRUCTURE:
   - Short paragraphs (2-4 sentences)
   - Bullet points and numbered lists
   - Bold key phrases
   - Include images with alt text descriptions

6. READABILITY:
   - Target 8th-grade reading level
   - Use active voice
   - Avoid jargon without explanation
   - Include transition phrases
"""
