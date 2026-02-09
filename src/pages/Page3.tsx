import Header from '@/components/Header';
import WorkingSection from '@/components/WorkingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Page3 = () => {
  return (
    <div className="min-h-screen bg-background">
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
