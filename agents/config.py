"""Configuration for the content generation agents."""

import os
from dotenv import load_dotenv

load_dotenv()

# API Configuration
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")
DEFAULT_MODEL = os.getenv("DEFAULT_MODEL", "claude-sonnet-4-20250514")

# Company Information
COMPANY_NAME = os.getenv("COMPANY_NAME", "PowerGrid BESS")
COMPANY_WEBSITE = os.getenv("COMPANY_WEBSITE", "https://powergridbess.com")
COMPANY_DESCRIPTION = """PowerGrid BESS is a leading provider of Battery Energy Storage System (BESS)
solutions for utilities, commercial, and industrial applications. We deliver grid-scale energy
storage that maximizes efficiency, reduces costs, and accelerates the clean energy transition."""

# Content Topics
TOPICS = {
    "grid_stability": {
        "name": "Grid Stability & Reliability",
        "keywords": [
            "grid stability", "frequency regulation", "voltage support",
            "spinning reserves", "grid reliability", "power quality",
            "ancillary services", "black start capability"
        ],
        "description": "How BESS technology ensures stable, reliable grid operations"
    },
    "renewable_integration": {
        "name": "Renewable Energy Integration",
        "keywords": [
            "renewable integration", "solar storage", "wind storage",
            "intermittency", "capacity firming", "curtailment reduction",
            "hybrid systems", "clean energy"
        ],
        "description": "Maximizing renewable energy value through storage"
    },
    "cost_savings": {
        "name": "Cost Savings & ROI",
        "keywords": [
            "peak shaving", "demand charge reduction", "energy arbitrage",
            "time-of-use optimization", "ROI", "payback period",
            "revenue stacking", "operational savings"
        ],
        "description": "Financial benefits and return on investment from BESS"
    },
    "sustainability": {
        "name": "Sustainability & Decarbonization",
        "keywords": [
            "decarbonization", "carbon reduction", "net zero",
            "sustainability", "ESG", "clean energy transition",
            "emissions reduction", "climate goals"
        ],
        "description": "Environmental impact and sustainability benefits of BESS"
    },
    "technology": {
        "name": "BESS Technology & Innovation",
        "keywords": [
            "lithium-ion", "battery technology", "battery management system",
            "thermal management", "energy density", "cycle life",
            "safety systems", "innovation"
        ],
        "description": "Technical aspects and innovations in battery storage"
    },
    "industry_applications": {
        "name": "Industry Applications",
        "keywords": [
            "utility scale", "commercial industrial", "microgrids",
            "EV charging", "data centers", "manufacturing",
            "mining", "remote power"
        ],
        "description": "BESS applications across different industries"
    }
}

# Output Directories
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "output")
BLOG_OUTPUT_DIR = os.path.join(OUTPUT_DIR, "blog")
LINKEDIN_OUTPUT_DIR = os.path.join(OUTPUT_DIR, "linkedin")
