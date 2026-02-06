import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container px-6 md:px-12">
        <AnimatedSection>
          <div className="text-center max-w-4xl mx-auto">
            {/* Glow Effect */}
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-glow-gradient scale-150 animate-pulse-glow" />
              <h2 className="relative text-heading font-light tracking-wide text-foreground">
                ABOUT ATEEN
              </h2>
            </div>
            
            <p className="text-muted-foreground tracking-[0.2em] mb-8">
              BASED IN MALAYSIA. WORKING WORLDWIDE.
            </p>

            <AnimatedSection delay={0.2}>
              <p className="text-subheading text-foreground/90 leading-relaxed tracking-wide">
                ATEEN CREATIVE BUILDS BRAND SYSTEMS WITH CLARITY AND DIRECTION.
              </p>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
