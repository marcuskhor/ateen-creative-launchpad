import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heroMesh from '@/assets/hero-mesh.jpg';
import { TextReveal } from './AnimatedSection';

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background wrapper for parallax scroll */}
      <motion.div 
        className="absolute inset-0"
        style={{ 
          y: backgroundY,
          scale
        }}
      >
        {/* Inner div for floating animation */}
        <motion.div 
          className="absolute inset-[-20px] bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroMesh})`,
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, 8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/40" />
      
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <motion.div 
        className="relative z-10 container px-6 md:px-12"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-5xl"
        >
          <motion.h1 
            className="text-display font-light text-foreground mb-8"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <TextReveal 
              text='"BUILD BRANDS' 
              staggerDelay={0.04}
            />
            <br />
            <TextReveal 
              text='WITH DIRECTION, NOT TRENDS."' 
              staggerDelay={0.04}
            />
          </motion.h1>

          <motion.div 
            className="space-y-6 max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-lg md:text-xl text-foreground/80 tracking-wide leading-relaxed">
              WE TRANSFORM BUSINESSES INTO BRANDS PEOPLE RECOGNIZE, REMEMBER, AND RETURN TO.
            </p>
            
            <motion.p 
              className="text-lg md:text-xl text-primary tracking-widest font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              IDENTITY → CONTENT → EXPERIENCE
            </motion.p>

            <p className="text-foreground/60 leading-relaxed">
              WE BRING CLARITY AND DIRECTION ACROSS EVERY PART OF THE BRAND.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <span className="text-xs tracking-widest text-muted-foreground">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-primary to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
