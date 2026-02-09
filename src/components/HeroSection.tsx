import { motion } from 'framer-motion';
import heroMesh from '@/assets/hero-mesh.jpg';
import { TextReveal } from './AnimatedSection';

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image - full coverage */}
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

      {/* Subtle overlay - minimal to keep background visible */}
      <div className="absolute inset-0 bg-background/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between px-6 md:px-12 pt-28 pb-16">
        {/* Top section - Main quote, upper left */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-[1.1] tracking-wide">
            <TextReveal 
              text={'\u201CBUILD BRANDS'} 
              staggerDelay={0.04}
            />
            <br />
            <TextReveal 
              text={'WITH DIRECTION, NOT TRENDS.\u201D'} 
              staggerDelay={0.04}
            />
          </h1>
        </motion.div>

        {/* Middle-lower section - Subtitles, right-aligned */}
        <motion.div 
          className="flex flex-col items-end text-right max-w-3xl ml-auto space-y-3"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm md:text-base lg:text-lg text-foreground/85 tracking-[0.15em] leading-relaxed">
            WE TRANSFORM BUSINESSES INTO BRANDS PEOPLE RECOGNIZE, REMEMBER, AND RETURN TO.
          </p>
          
          <motion.p 
            className="text-sm md:text-base lg:text-lg text-foreground/85 tracking-[0.15em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            IDENTITY → CONTENT → EXPERIENCE
          </motion.p>

          <p className="text-sm md:text-base lg:text-lg text-foreground/85 tracking-[0.15em]">
            WE BRING CLARITY AND DIRECTION ACROSS EVERY PART OF THE BRAND.
          </p>
        </motion.div>

        {/* Bottom - Two lime accent lines, right side */}
        <motion.div 
          className="flex items-center justify-end gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <div className="w-20 h-[2px] bg-primary" />
          <div className="w-20 h-[2px] bg-primary" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
