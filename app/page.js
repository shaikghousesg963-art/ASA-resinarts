export const dynamic = 'force-dynamic';
export const revalidate = 0;

import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import CategorySlider from '@/components/CategorySlider/CategorySlider';
import OccasionsBanner from '@/components/OccasionsBanner/OccasionsBanner';
import FeaturesGrid from '@/components/FeaturesGrid/FeaturesGrid';
import CustomHamperCTA from '@/components/CustomHamperCTA/CustomHamperCTA';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <CategorySlider />
        <OccasionsBanner />
        <FeaturesGrid />
        <ProductGrid />
        <CustomHamperCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
