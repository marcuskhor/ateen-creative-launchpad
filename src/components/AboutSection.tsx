import AnimatedSection, { TextReveal } from './AnimatedSection';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="about" className="pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 bg-background" ref={ref}>
      <div className="container px-6 md:px-12">
        <div className="text-center max-w-4xl mx-auto">
          {/* Neon green circle behind title */}
          <div className="relative inline-block mb-10">
            <motion.div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-48 md:h-48 rounded-full"
              style={{
                background: 'radial-gradient(circle, hsl(75 100% 50% / 0.8) 0%, hsl(75 100% 45% / 0.5) 25%, hsl(75 100% 40% / 0.15) 55%, transparent 75%)',
                filter: 'blur(8px)',
              }}
              animate={{
                opacity: [0.7, 1, 0.7],
                scale: [0.95, 1.08, 0.95],
                boxShadow: [
                  '0 0 40px hsl(75 100% 50% / 0.3)',
                  '0 0 80px hsl(75 100% 50% / 0.5)',
                  '0 0 40px hsl(75 100% 50% / 0.3)',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <AnimatedSection>
              <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.15em] text-foreground">
                ABOUT ATEEN
              </h2>
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={0.1}>
            <p className="text-sm md:text-base font-light text-foreground/80 tracking-[0.3em] mb-10">
              BASED IN MALAYSIA. WORKING WORLWIDE.
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
