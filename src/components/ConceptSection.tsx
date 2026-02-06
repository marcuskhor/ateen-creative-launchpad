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
    <section ref={sectionRef} className="section-padding bg-primary relative overflow-hidden">
      {/* Animated background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-[0.07]"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_black_1px,_transparent_0)] bg-[size:50px_50px]" />
      </motion.div>

      <div className="container px-6 md:px-12 relative z-10">
        <AnimatedSection direction="scale">
          <h2 className="text-heading font-light tracking-wide text-primary-foreground mb-16 text-center">
            <TextReveal text="CONCEPT SYSTEMS" staggerDelay={0.05} />
          </h2>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-10 text-center">
          <AnimatedSection delay={0.1}>
            <p className="text-xl md:text-2xl text-primary-foreground/95 leading-relaxed font-light">
              BUILDING A BRAND ISN'T ABOUT DOING MORE.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              IT'S ABOUT DOING THE RIGHT THINGS IN THE RIGHT ORDER, AND DOING THEM CONSISTENTLY.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-primary-foreground/75 leading-relaxed">
              MOST BRANDS STRUGGLE NOT BECAUSE THEY LACK EFFORT, BUT BECAUSE DESIGN, CONTENT, AND MARKETING MOVE IN DIFFERENT DIRECTIONS.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p className="text-lg text-primary-foreground font-medium leading-relaxed pt-4">
              WE BRING EVERYTHING INTO ONE SYSTEM, SO DECISIONS ARE CLEAR, EXECUTION STAYS ALIGNED, AND QUALITY IS NEVER COMPROMISED AS THE BRAND GROWS.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
