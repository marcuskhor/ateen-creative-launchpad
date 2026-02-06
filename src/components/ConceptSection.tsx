import AnimatedSection from './AnimatedSection';

const ConceptSection = () => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_black_1px,_transparent_0)] bg-[size:40px_40px]" />
      </div>

      <div className="container px-6 md:px-12 relative z-10">
        <AnimatedSection>
          <h2 className="text-heading font-light tracking-wide text-primary-foreground mb-12 text-center">
            CONCEPT SYSTEMS
          </h2>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-8 text-center">
          <AnimatedSection delay={0.1}>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              BUILDING A BRAND ISN'T ABOUT DOING MORE. IT'S ABOUT DOING THE RIGHT THINGS IN THE RIGHT ORDER, AND DOING THEM CONSISTENTLY.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-primary-foreground/80 leading-relaxed">
              MOST BRANDS STRUGGLE NOT BECAUSE THEY LACK EFFORT, BUT BECAUSE DESIGN, CONTENT, AND MARKETING MOVE IN DIFFERENT DIRECTIONS.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-primary-foreground/90 leading-relaxed font-medium">
              WE BRING EVERYTHING INTO ONE SYSTEM, SO DECISIONS ARE CLEAR, EXECUTION STAYS ALIGNED, AND QUALITY IS NEVER COMPROMISED AS THE BRAND GROWS.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
