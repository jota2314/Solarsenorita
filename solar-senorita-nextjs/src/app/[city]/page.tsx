import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import LocalContentSection from '@/components/LocalContentSection';
import BenefitsSection from '@/components/BenefitsSection';
import ElectricityPriceGraph from '@/components/ElectricityPriceGraph';
import ReviewCarousel from '@/components/ReviewCarousel';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { massachusettsCities, cityDisplayNames, cityDescriptions } from '@/lib/cities';

interface CityPageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return massachusettsCities.map((city) => ({
    city: city,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city } = await params;
  const cityName = cityDisplayNames[city];
  
  if (!cityName) {
    return {};
  }

  const title = `Solar Panels ${cityName} MA | Free Consultation | Solar Señorita`;
  const description = cityDescriptions[city] || `Professional solar panel installation and consultation services in ${cityName}, Massachusetts. Get your free solar consultation and start saving on energy bills.`;

  return {
    title,
    description,
    keywords: [
      `solar panels ${cityName}`,
      `solar installation ${cityName} MA`,
      `solar energy ${cityName} Massachusetts`,
      `${cityName} solar consultation`,
      `solar savings ${cityName}`,
      `renewable energy ${cityName}`,
      `solar panel cost ${cityName}`,
      `energy independence ${cityName}`,
      `solar financing ${cityName}`,
      `Massachusetts solar incentives ${cityName}`
    ],
    openGraph: {
      title,
      description,
      url: `https://solarsenorita.com/${city}`,
      siteName: 'Solar Señorita',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `Solar Señorita - ${cityName} Solar Panel Expert`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
    },
    alternates: {
      canonical: `https://solarsenorita.com/${city}`,
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { city } = await params;
  const cityName = cityDisplayNames[city];

  if (!cityName) {
    notFound();
  }

  return (
    <>
      <StructuredData city={cityName} />
      <Header />
      <main>
        <HeroSection city={cityName} />
        <AboutSection city={cityName} />
        <LocalContentSection citySlug={city} />
        <BenefitsSection city={cityName} />
        <ElectricityPriceGraph />
        <ReviewCarousel city={cityName} />
        <FAQ city={cityName} />
      </main>
      <Footer />
    </>
  );
}