import Header from '@/components/Header';
import WorkingSection from '@/components/WorkingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

const Page3 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Start a Project — ATEEN Works"
        description="Tell us about your brand. ATEEN Works partners with founders and teams ready to build a long-term, structured brand identity."
        path="/work"
      />
      <Header />
      <main>
        <WorkingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Page3;
