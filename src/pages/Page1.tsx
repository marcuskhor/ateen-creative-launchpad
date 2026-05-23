import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Seo from '@/components/Seo';

const Page1 = () => {
  return (
    <div className="h-screen bg-background overflow-hidden">
      <Seo
        title="ATEEN Works — Brand Design & Execution Studio"
        description="ATEEN Works builds structured, long-term brand identities through design, content, and execution — for clients who value consistency."
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
