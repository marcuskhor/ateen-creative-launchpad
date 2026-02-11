import AnimatedSection, { TextReveal } from './AnimatedSection';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ConceptSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section id="concepts" ref={sectionRef}>
      {/* Title above green section */}
      <div className="bg-background py-16 md:py-20">
        <div className="container px-6 md:px-12">
          <AnimatedSection direction="scale">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-[0.15em] text-foreground text-center">
              <TextReveal text="CONCEPT SYSTEMS" staggerDelay={0.05} />
            </h2>
          </AnimatedSection>
        </div>
      </div>

      {/* Green/lime visual block */}
      <div className="bg-primary relative overflow-hidden h-[40vh] md:h-[50vh]">
        <motion.div 
          className="absolute inset-0 opacity-[0.07]"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_black_1px,_transparent_0)] bg-[size:50px_50px]" />
        </motion.div>
      </div>

      {/* Text below green section */}
      <div className="bg-background py-16 md:py-24">
        <div className="container px-6 md:px-12">
          <div className="max-w-3xl mx-auto space-y-10 text-center">
            <AnimatedSection delay={0.1}>
              <p className="text-sm md:text-base text-primary tracking-[0.15em] leading-relaxed">
                BUILDING A BRAND ISN'T ABOUT DOING MORE.
              </p>
              <p className="text-sm md:text-base text-foreground/80 tracking-[0.1em] leading-relaxed mt-1">
                IT'S ABOUT DOING THE RIGHT THINGS IN THE RIGHT ORDER, AND DOING THEM CONSISTENTLY.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-sm md:text-base text-foreground/70 tracking-[0.1em] leading-relaxed">
                MOST BRAND STRUGGLE NOT BECAUSE THEY LACK EFFORT,
              </p>
              <p className="text-sm md:text-base text-foreground/70 tracking-[0.1em] leading-relaxed">
                BUT BECAUSE DEISGN, CONTENT, AND MARKETING MOVE IN DIFFERENT DIRECTIONS.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-sm md:text-base text-primary tracking-[0.1em] leading-relaxed">
                WE BRING EVERYTHING INTO ONE SYSTEM,
              </p>
              <p className="text-sm md:text-base text-primary tracking-[0.1em] leading-relaxed">
                SO DECISIONS ARE CLEAR, EXECUTION STAYS ALIGNED,
              </p>
              <p className="text-sm md:text-base text-primary tracking-[0.1em] leading-relaxed">
                AND QUALITY IS NEVER COMPROMISED AS THE BRAND GROWS.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
