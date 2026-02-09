import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';

const Page1 = () => {
  return (
    <div className="h-screen bg-background overflow-hidden">
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default Page1;
