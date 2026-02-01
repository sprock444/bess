import { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Benefits from "@/components/Benefits";
import Industries from "@/components/Industries";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import Footer from "@/components/Footer";
import { generateLocalBusinessSchema, serviceAreas } from "@/lib/geo";

export const metadata: Metadata = {
  title: "PowerGrid BESS - Leading Battery Energy Storage Solutions",
  description:
    "Industry-leading Battery Energy Storage Systems (BESS) for utilities, commercial, and industrial applications. Maximize efficiency, reduce costs, and accelerate your clean energy transition with our proven grid-scale storage solutions.",
  keywords: [
    "battery energy storage system",
    "BESS solutions",
    "grid-scale energy storage",
    "utility battery storage",
    "commercial energy storage",
    "industrial battery systems",
    "renewable energy integration",
    "peak shaving",
    "frequency regulation",
    "solar plus storage",
    "wind energy storage",
    "energy storage California",
    "energy storage Texas",
    "microgrid solutions",
    "EV charging infrastructure",
  ],
  openGraph: {
    title: "PowerGrid BESS - Leading Battery Energy Storage Solutions",
    description:
      "Industry-leading Battery Energy Storage Systems for utilities, commercial, and industrial applications.",
    type: "website",
    url: "https://powergridbess.com",
    siteName: "PowerGrid BESS",
    images: [
      {
        url: "https://powergridbess.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PowerGrid BESS - Battery Energy Storage Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PowerGrid BESS - Leading Battery Energy Storage Solutions",
    description:
      "Industry-leading Battery Energy Storage Systems for utilities, commercial, and industrial applications.",
    images: ["https://powergridbess.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://powergridbess.com",
  },
};

export default function Home() {
  // Generate structured data for all service areas
  const localBusinessSchemas = serviceAreas.map((area) =>
    generateLocalBusinessSchema(area.name, area.coordinates)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "PowerGrid BESS - Battery Energy Storage Solutions",
            description:
              "Industry-leading Battery Energy Storage Systems for utilities, commercial, and industrial applications.",
            url: "https://powergridbess.com",
            mainEntity: {
              "@type": "Product",
              name: "Battery Energy Storage System",
              description:
                "Grid-scale and commercial battery energy storage solutions for renewable integration, peak shaving, and grid stability.",
              brand: {
                "@type": "Brand",
                name: "PowerGrid BESS",
              },
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                priceCurrency: "USD",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  priceCurrency: "USD",
                  eligibleTransactionVolume: {
                    "@type": "QuantitativeValue",
                    minValue: 1,
                    unitCode: "MWH",
                  },
                },
              },
              review: {
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "4.9",
                  bestRating: "5",
                },
                author: {
                  "@type": "Organization",
                  name: "Energy Storage Industry Association",
                },
              },
            },
          }),
        }}
      />
      {localBusinessSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Benefits />
        <Industries />
        <LeadCaptureForm />
      </main>
      <Footer />
    </>
  );
}
