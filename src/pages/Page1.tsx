import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Seo from '@/components/Seo';

const Page1 = () => {
  return (
    <div className="h-screen bg-background overflow-hidden">
      <Seo
        title="ATEEN — Build a Brand That's Consistent Online and Offline"
        description="ATEEN helps businesses connect their brand across every touchpoint. From digital presence to packaging, space, and people. Direction. System. Consistency."
        path="/"
      />
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default Page1;
