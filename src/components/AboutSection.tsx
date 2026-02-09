import AnimatedSection, { TextReveal, LineReveal } from './AnimatedSection';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="about" className="pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 bg-background" ref={ref}>
      <div className="container px-6 md:px-12">
        <div className="text-center max-w-4xl mx-auto">
          {/* Glow Effect */}
          <div className="relative inline-block mb-6">
            <motion.div 
              className="absolute inset-0 bg-glow-gradient scale-[2]"
              animate={isInView ? { opacity: [0.3, 0.6, 0.3] } : { opacity: 0 }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <AnimatedSection>
              <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.15em] text-foreground">
                <TextReveal text="ABOUT ATEEN" staggerDelay={0.05} />
              </h2>
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={0.1}>
            <p className="text-sm md:text-base text-muted-foreground tracking-[0.3em] mb-8">
              BASED IN MALAYSIA. WORKING WORLWIDE.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed tracking-[0.15em] max-w-xl mx-auto">
              ATEEN CREATIVE BUILDS BRAND SYSTEMS
              <br />
              WITH CLARITY AND DIRECTION.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
