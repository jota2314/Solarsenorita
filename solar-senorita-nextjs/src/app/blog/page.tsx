import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogList from '@/components/BlogList';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Solar Blog Massachusetts | Solar Señorita Expert Tips & News',
  description: 'Stay updated with the latest solar news, tips, and insights for Massachusetts homeowners. Expert advice on solar panels, incentives, and energy savings.',
  keywords: [
    'solar blog Massachusetts',
    'solar news MA',
    'solar panel tips',
    'Massachusetts solar incentives',
    'solar energy blog',
    'solar installation advice',
    'renewable energy news Massachusetts'
  ],
  openGraph: {
    title: 'Solar Blog Massachusetts | Solar Señorita Expert Tips',
    description: 'Expert solar advice and news for Massachusetts homeowners',
    url: 'https://solarsenorita.com/blog',
    siteName: 'Solar Señorita',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Solar Señorita Blog - Massachusetts Solar Expert Tips',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://solarsenorita.com/blog',
  },
};

export default function BlogPage() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <BlogList />
      </main>
      <Footer />
    </>
  );
}