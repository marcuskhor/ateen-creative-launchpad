import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ConceptSection from '@/components/ConceptSection';
import Footer from '@/components/Footer';

const Page2 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AboutSection />
        <ServicesSection />
        <ConceptSection />
      </main>
      <Footer />
    </div>
  );
};

export default Page2;
