import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

const ConceptLunora = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container px-6 md:px-12">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.1em] text-foreground mb-6">
              LUNORA
            </h1>
            <p className="text-sm md:text-base text-primary tracking-[0.15em] mb-4">
              DESIGNED FOR RECOVERY.
            </p>
            <p className="text-sm md:text-base text-foreground/60 tracking-[0.1em] leading-relaxed max-w-2xl">
              TURNING RECOVERY INTO IDENTITY AND LAUNCH. A WELLNESS BRAND ROOTED IN CALM AND INTENTION.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
              {['BRAND FOUNDATION', 'CONTENT SYSTEM', 'PACKAGING LANGUAGE', 'PRODUCT EXPERIENCE'].map((s) => (
                <div key={s} className="border border-primary/30 p-4">
                  <p className="text-xs tracking-[0.1em] text-foreground/70">{s}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConceptLunora;
