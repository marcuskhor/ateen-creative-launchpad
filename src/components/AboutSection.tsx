import AnimatedSection, { TextReveal, LineReveal } from './AnimatedSection';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container px-6 md:px-12">
        <div className="text-center max-w-4xl mx-auto">
          {/* Glow Effect */}
          <div className="relative inline-block mb-8">
            <motion.div 
              className="absolute inset-0 bg-glow-gradient scale-[2]"
              animate={isInView ? { opacity: [0.3, 0.6, 0.3] } : { opacity: 0 }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <AnimatedSection>
              <h2 className="relative text-heading font-light tracking-wide text-foreground">
                <TextReveal text="ABOUT ATEEN" staggerDelay={0.05} />
              </h2>
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={0.1}>
            <p className="text-muted-foreground tracking-[0.2em] mb-12">
              BASED IN MALAYSIA. WORKING WORLDWIDE.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-subheading text-foreground/90 leading-relaxed tracking-wide">
              <TextReveal 
                text="ATEEN CREATIVE BUILDS BRAND SYSTEMS WITH CLARITY AND DIRECTION." 
                staggerDelay={0.02}
              />
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
