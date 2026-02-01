# BESS Content Generation Agents

AI-powered content generation system for creating SEO-optimized blog posts and LinkedIn content about Battery Energy Storage Systems.

## Features

- **Blog Post Agent**: Generates long-form, SEO-optimized blog content
- **LinkedIn Agent**: Creates engaging social media posts
- **Content Templates**: Pre-built structures for different content types
- **Topic Library**: BESS-specific topics with relevant keywords
- **Scheduler**: Automated content calendar generation
- **CLI Interface**: Easy-to-use command line tool

## Setup

1. **Install dependencies**:
   ```bash
   cd agents
   pip install -r requirements.txt
   ```

2. **Configure API key**:
   ```bash
   cp .env.example .env
   # Edit .env and add your Anthropic API key
   ```

## Usage

### List Available Options

```bash
# List all topics
python main.py list --topics

# List blog templates
python main.py list --blog-templates

# List LinkedIn templates
python main.py list --linkedin-templates
```

### Generate Blog Posts

```bash
# Basic blog post
python main.py blog grid_stability

# With specific template and save to file
python main.py blog renewable_integration -t thought_leadership -s

# With additional context
python main.py blog cost_savings -c "Focus on commercial real estate applications" -s

# Preview only (first 1500 chars)
python main.py blog technology -p
```

### Generate LinkedIn Posts

```bash
# Basic LinkedIn post
python main.py linkedin sustainability

# With specific template
python main.py linkedin grid_stability -t tips -s

# With custom hook suggestion
python main.py linkedin cost_savings --hook "The ROI numbers are in..."
```

### Schedule Content

```bash
# Schedule a single blog post
python main.py schedule --type blog --topic grid_stability --time "2025-02-15T09:00:00"

# Schedule a LinkedIn post
python main.py schedule --type linkedin --topic sustainability

# Generate a 4-week content calendar
python main.py schedule --calendar --weeks 4

# Check schedule status
python main.py status
```

### Run Scheduler

```bash
# Execute all pending tasks immediately
python main.py run --execute-now

# Run as daemon (checks every 60 seconds)
python main.py run --interval 60
```

## Topics

| Key | Name | Focus |
|-----|------|-------|
| `grid_stability` | Grid Stability & Reliability | Frequency regulation, voltage support |
| `renewable_integration` | Renewable Energy Integration | Solar/wind storage, capacity firming |
| `cost_savings` | Cost Savings & ROI | Peak shaving, demand charges, arbitrage |
| `sustainability` | Sustainability & Decarbonization | ESG, net zero, emissions reduction |
| `technology` | BESS Technology & Innovation | Battery tech, BMS, safety systems |
| `industry_applications` | Industry Applications | Utilities, C&I, microgrids, EV charging |

## Blog Templates

| Template | Best For |
|----------|----------|
| `educational` | Deep-dive explainers (1500-2000 words) |
| `thought_leadership` | Industry perspectives (1200-1500 words) |
| `how_to_guide` | Step-by-step guides (1800-2500 words) |
| `news_analysis` | Timely industry analysis (800-1200 words) |
| `case_study` | Project showcases (1200-1800 words) |

## LinkedIn Templates

| Template | Best For |
|----------|----------|
| `insight` | Industry observations |
| `story` | Personal experiences |
| `tips` | Listicle-style advice |
| `question` | Engagement drivers |
| `announcement` | News and updates |
| `data_driven` | Statistics-based posts |

## Output

Generated content is saved to:
- Blog posts: `output/blog/`
- LinkedIn posts: `output/linkedin/`

Each piece of content generates:
- `.md` or `.txt` file (ready to use)
- `.json` file (full metadata)

## Project Structure

```
agents/
├── main.py              # CLI entry point
├── blog_agent.py        # Blog generation agent
├── linkedin_agent.py    # LinkedIn generation agent
├── scheduler.py         # Content scheduling system
├── config.py            # Configuration and topics
├── requirements.txt     # Python dependencies
├── .env.example         # Environment template
├── templates/
│   ├── blog_templates.py
│   └── linkedin_templates.py
└── output/
    ├── blog/
    └── linkedin/
```
