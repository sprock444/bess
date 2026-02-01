import { Metadata } from "next";

interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  locale?: string;
  siteName?: string;
}

export const defaultSEO: SEOConfig = {
  title: "PowerGrid BESS - Battery Energy Storage Solutions",
  description:
    "Leading provider of Battery Energy Storage System (BESS) solutions. We deliver grid-scale energy storage for utilities, commercial, and industrial applications. Optimize your renewable energy integration and reduce costs.",
  keywords: [
    "battery energy storage",
    "BESS",
    "energy storage system",
    "grid storage",
    "renewable energy storage",
    "utility scale battery",
    "commercial energy storage",
    "industrial battery storage",
    "lithium-ion battery storage",
    "grid stability",
    "peak shaving",
    "load shifting",
    "frequency regulation",
    "solar battery storage",
    "wind energy storage",
  ],
  siteName: "PowerGrid BESS",
  locale: "en_US",
};

export function generateMetadata(config?: Partial<SEOConfig>): Metadata {
  const seo = { ...defaultSEO, ...config };

  return {
    title: {
      default: seo.title,
      template: `%s | ${seo.siteName}`,
    },
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: "PowerGrid BESS" }],
    creator: "PowerGrid BESS",
    publisher: "PowerGrid BESS",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: seo.locale,
      url: seo.canonical,
      siteName: seo.siteName,
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "PowerGrid BESS - Battery Energy Storage Solutions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: ["/og-image.jpg"],
    },
    alternates: {
      canonical: seo.canonical,
    },
    verification: {
      google: "your-google-verification-code",
    },
  };
}

export interface StructuredDataOrganization {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  logo: string;
  sameAs: string[];
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: {
    "@type": string;
    telephone: string;
    contactType: string;
    areaServed: string[];
    availableLanguage: string[];
  };
}

export const organizationSchema: StructuredDataOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PowerGrid BESS",
  description:
    "Leading provider of Battery Energy Storage System solutions for utilities, commercial, and industrial applications.",
  url: "https://powergridbess.com",
  logo: "https://powergridbess.com/logo.png",
  sameAs: [
    "https://www.linkedin.com/company/powergridbess",
    "https://twitter.com/powergridbess",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Energy Way",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94105",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-800-BESS-NOW",
    contactType: "sales",
    areaServed: ["US", "CA", "EU", "AU"],
    availableLanguage: ["English", "Spanish"],
  },
};

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
