import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BenefitsSection from '@/components/BenefitsSection';
import ElectricityPriceGraph from '@/components/ElectricityPriceGraph';
import ReviewCarousel from '@/components/ReviewCarousel';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ElectricityPriceGraph />
        <BenefitsSection />
        <ReviewCarousel />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
