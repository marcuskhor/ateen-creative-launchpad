import AnimatedSection, { TextReveal } from './AnimatedSection';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-background" ref={ref}>
      <div className="container px-6 md:px-12">
        <div className="text-center max-w-4xl mx-auto">
          {/* Neon green circle behind title */}
          <div className="relative inline-flex items-center justify-center mb-10">
            {/* Neon circle - centered and behind text */}
            <motion.div 
              className="absolute w-36 h-36 md:w-48 md:h-48 rounded-full z-0"
              style={{
                background: 'radial-gradient(circle, hsl(75 100% 50% / 0.9) 0%, hsl(75 100% 50% / 0.5) 20%, hsl(75 100% 45% / 0.2) 50%, transparent 70%)',
                filter: 'blur(6px)',
              }}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={isInView ? {
                opacity: [0.6, 1, 0.6],
                scale: [0.9, 1.1, 0.9],
                boxShadow: [
                  '0 0 30px hsl(75 100% 50% / 0.2)',
                  '0 0 70px hsl(75 100% 50% / 0.5)',
                  '0 0 30px hsl(75 100% 50% / 0.2)',
                ],
              } : { opacity: 0, scale: 0.3 }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <AnimatedSection>
              <h2 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-medium tracking-[0.15em] text-foreground">
                ABOUT ATEEN
              </h2>
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={0.1}>
            <p className="text-sm md:text-base font-light text-foreground/80 tracking-[0.3em] mb-4">
              BASED IN MALAYSIA. WORKING WORLWIDE.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="text-xs md:text-sm font-light text-foreground/50 tracking-[0.25em] mb-10">
              BUILT FOR LONG-TERM BRANDS
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-sm md:text-base font-light text-foreground/80 tracking-[0.3em] leading-relaxed max-w-xl mx-auto">
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
