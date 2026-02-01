export interface GeoLocation {
  country: string;
  region: string;
  city: string;
  timezone: string;
  currency: string;
  locale: string;
}

export const defaultLocation: GeoLocation = {
  country: "US",
  region: "California",
  city: "San Francisco",
  timezone: "America/Los_Angeles",
  currency: "USD",
  locale: "en-US",
};

export const regionalContent: Record<
  string,
  {
    headline: string;
    subheadline: string;
    cta: string;
    incentives: string[];
  }
> = {
  US: {
    headline: "Power Your Future with Advanced Energy Storage",
    subheadline:
      "Take advantage of the Inflation Reduction Act tax credits for energy storage systems",
    cta: "Get Your Free Assessment",
    incentives: [
      "Up to 30% Investment Tax Credit (ITC)",
      "Accelerated depreciation benefits",
      "State-level renewable energy incentives",
      "Utility rebate programs",
    ],
  },
  CA: {
    headline: "Canadian Energy Storage Excellence",
    subheadline:
      "Supporting Canada's clean energy transition with advanced BESS solutions",
    cta: "Request a Consultation",
    incentives: [
      "Clean Technology Investment Tax Credit",
      "Provincial incentive programs",
      "Carbon credit opportunities",
      "Net metering benefits",
    ],
  },
  EU: {
    headline: "European Grid Storage Solutions",
    subheadline:
      "Enabling the EU's renewable energy targets with scalable storage",
    cta: "Speak with an Expert",
    incentives: [
      "EU Green Deal funding opportunities",
      "National renewable energy subsidies",
      "Feed-in tariff benefits",
      "Carbon trading advantages",
    ],
  },
  AU: {
    headline: "Australian Energy Storage Innovation",
    subheadline:
      "Powering Australia's renewable future with reliable battery storage",
    cta: "Get Started Today",
    incentives: [
      "Large-scale Generation Certificates (LGCs)",
      "State-based battery incentives",
      "Renewable Energy Target benefits",
      "Grid connection support",
    ],
  },
};

export function getRegionalContent(countryCode: string) {
  return regionalContent[countryCode] || regionalContent["US"];
}

export interface ServiceArea {
  name: string;
  slug: string;
  description: string;
  coordinates: { lat: number; lng: number };
}

export const serviceAreas: ServiceArea[] = [
  {
    name: "California",
    slug: "california",
    description:
      "Leading BESS solutions for California's renewable energy goals and grid stability needs.",
    coordinates: { lat: 36.7783, lng: -119.4179 },
  },
  {
    name: "Texas",
    slug: "texas",
    description:
      "Grid-scale energy storage supporting ERCOT and Texas's growing renewable capacity.",
    coordinates: { lat: 31.9686, lng: -99.9018 },
  },
  {
    name: "New York",
    slug: "new-york",
    description:
      "Battery storage solutions supporting New York's Climate Leadership and Community Protection Act.",
    coordinates: { lat: 40.7128, lng: -74.006 },
  },
  {
    name: "Arizona",
    slug: "arizona",
    description:
      "Solar-plus-storage solutions optimized for Arizona's abundant solar resources.",
    coordinates: { lat: 34.0489, lng: -111.0937 },
  },
  {
    name: "Florida",
    slug: "florida",
    description:
      "Hurricane-resilient energy storage for Florida's grid reliability and storm recovery.",
    coordinates: { lat: 27.6648, lng: -81.5158 },
  },
];

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((area) => area.slug === slug);
}

export interface LocalBusinessSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  image: string;
  url: string;
  telephone: string;
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    "@type": string;
    latitude: number;
    longitude: number;
  };
  areaServed: {
    "@type": string;
    name: string;
  }[];
  priceRange: string;
}

export function generateLocalBusinessSchema(
  location: string,
  coords: { lat: number; lng: number }
): LocalBusinessSchema {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `PowerGrid BESS - ${location}`,
    description: `Battery Energy Storage System solutions in ${location}. Grid-scale energy storage for utilities and commercial applications.`,
    image: "https://powergridbess.com/og-image.jpg",
    url: `https://powergridbess.com/${location.toLowerCase().replace(/\s+/g, "-")}`,
    telephone: "+1-800-BESS-NOW",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Energy Center",
      addressLocality: location,
      addressRegion: "",
      postalCode: "",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: coords.lat,
      longitude: coords.lng,
    },
    areaServed: [
      { "@type": "State", name: location },
      { "@type": "Country", name: "United States" },
    ],
    priceRange: "$$$$",
  };
}
