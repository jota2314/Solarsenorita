'use client';

import Script from 'next/script';
import { getCityLocalContent } from '@/lib/localSolarData';

interface StructuredDataProps {
  city?: string;
}

const StructuredData: React.FC<StructuredDataProps> = ({ city }) => {
  const cityData = city ? getCityLocalContent(city.toLowerCase()) : null;
  
  // Enhanced Local Business Schema with Deep Local Data
  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": `https://solarsenorita.com/${city ? city.toLowerCase() : ''}#business`,
    "name": `Solar Señorita${city ? ` - ${city}` : ''}`,
    "alternateName": ["Solar Senorita", "The Solar Señorita"],
    "description": cityData?.description || `Professional solar panel installation and consultation services${city ? ` in ${city}, Massachusetts` : ' in Massachusetts'}. Get free solar consultation and start saving on energy bills.`,
    "url": `https://solarsenorita.com${city ? `/${city.toLowerCase()}` : ''}`,
    "telephone": "+17814266300",
    "email": "TheSolarSenorita@gmail.com",
    "image": [
      "https://solarsenorita.com/og-image.jpg",
      "https://solarsenorita.com/Untitled design (25).png"
    ],
    "logo": "https://solarsenorita.com/Untitled design (25).png",
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": [
      "Cash",
      "Credit Card", 
      "Check",
      "Solar Financing",
      "Solar Leasing",
      "Power Purchase Agreement (PPA)"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "MA",
      ...(cityData && {
        "addressLocality": city,
        "addressCounty": cityData.geo.county,
        "postalCode": cityData.geo.zipCodes[0],
        "streetAddress": `Solar Installation Services - ${city}, MA`
      })
    },
    "geo": cityData ? {
      "@type": "GeoCoordinates",
      "latitude": cityData.geo.lat,
      "longitude": cityData.geo.lng
    } : {
      "@type": "GeoCoordinates", 
      "latitude": 42.3601,
      "longitude": -71.0589
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "Massachusetts",
        "alternateName": "MA"
      },
      ...(cityData?.geo.zipCodes.map(zip => ({
        "@type": "PostalAddress",
        "postalCode": zip,
        "addressLocality": city,
        "addressRegion": "MA",
        "addressCountry": "US"
      })) || []),
      ...(cityData?.geo.neighborhoods.map(neighborhood => ({
        "@type": "Place",
        "name": neighborhood,
        "containedInPlace": {
          "@type": "City",
          "name": city,
          "addressRegion": "MA"
        }
      })) || [])
    ],
    "serviceType": [
      "Solar Panel Installation",
      "Residential Solar Installation",
      "Commercial Solar Installation", 
      "Solar Energy Consultation",
      "Solar System Design",
      "Solar Permitting",
      "Solar Financing",
      "Solar Maintenance",
      "Battery Storage Installation",
      "Energy Independence Consulting",
      "Net Metering Setup",
      "Solar Roof Replacement"
    ],
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 09:00-17:00"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Solar Services ${city || 'Massachusetts'}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Free Solar Consultation",
            "description": "Comprehensive analysis of your property's solar potential"
          },
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Solar Installation",
            "description": "Complete solar panel system installation for homes"
          },
          "priceRange": "$15000-$40000",
          "priceCurrency": "USD"
        }
      ]
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Jennifer McFadden"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "We recently had solar installed on our two-family home, and Solar Señorita was fantastic to work with! Jenni Martinez was with us every step of the way."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person", 
          "name": "Andre Geoffroy"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5", 
          "bestRating": "5"
        },
        "reviewBody": "Solar Señorita exceeded my expectations. I started seeing savings on my energy bill within the first month."
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50+",
      "bestRating": "5",
      "worstRating": "5"
    },
    "founder": {
      "@type": "Person",
      "name": "Jenni Martinez",
      "alternateName": "Solar Señorita",
      "jobTitle": "Solar Energy Consultant",
      "knowsAbout": [
        "Solar Panel Installation",
        "Massachusetts Solar Incentives",
        "SMART Program",
        "Net Metering",
        "Solar Financing Options"
      ]
    }
  };

  // Service Schema for Solar Installation
  const serviceSchema = {
    "@type": "Service",
    "@id": `https://solarsenorita.com${city ? `/${city.toLowerCase()}` : ''}#solar-installation`,
    "name": `Solar Panel Installation${city ? ` in ${city}, MA` : ' in Massachusetts'}`,
    "description": `Professional solar panel installation services${city ? ` in ${city}, Massachusetts` : ' throughout Massachusetts'}. Expert design, permitting, and installation.`,
    "provider": {
      "@id": `https://solarsenorita.com${city ? `/${city.toLowerCase()}` : ''}#business`
    },
    "areaServed": city ? {
      "@type": "City",
      "name": city,
      "addressRegion": "MA",
      "addressCountry": "US"
    } : {
      "@type": "State", 
      "name": "Massachusetts"
    },
    "serviceOutput": {
      "@type": "Product",
      "name": "Solar Energy System",
      "description": "Complete residential or commercial solar panel system"
    }
  };

  // FAQ Schema
  const faqSchema = {
    "@type": "FAQPage",
    "@id": `https://solarsenorita.com${city ? `/${city.toLowerCase()}` : ''}#faq`,
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much can I save by switching to solar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most customers see a significant reduction in their utility bills — often 40–70% over time. Savings depend on your location, energy usage, and available incentives."
        }
      },
      {
        "@type": "Question",
        "name": `Do I qualify for solar incentives in ${city || 'Massachusetts'}?`,
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Yes! Many customers are eligible for the Federal Solar Investment Tax Credit (ITC) and Massachusetts state incentives like the SMART program."
        }
      }
    ]
  };

  // Website Schema
  const websiteSchema = {
    "@type": "WebSite",
    "@id": "https://solarsenorita.com#website",
    "url": "https://solarsenorita.com",
    "name": "Solar Señorita",
    "description": `Massachusetts solar panel expert offering free consultations${city ? ` in ${city}` : ''}`,
    "publisher": {
      "@id": `https://solarsenorita.com${city ? `/${city.toLowerCase()}` : ''}#business`
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://solarsenorita.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    ]
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessSchema,
      serviceSchema,
      faqSchema,
      websiteSchema
    ]
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
};

export default StructuredData;