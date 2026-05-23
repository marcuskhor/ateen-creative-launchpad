import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ConceptSection from '@/components/ConceptSection';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

const Page2 = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="About & Services — ATEEN Works"
        description="Learn how ATEEN Works approaches brand systems, identity, and execution — services across system, branding, strategy, and implementation."
        path="/about"
      />
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
