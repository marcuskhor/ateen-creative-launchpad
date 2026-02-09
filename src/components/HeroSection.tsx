import { motion } from 'framer-motion';
import heroMesh from '@/assets/hero-mesh.jpg';
import { TextReveal } from './AnimatedSection';

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image */}
      <motion.div 
        className="absolute inset-[-20px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroMesh})` }}
        animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Gradient overlay - dark top-right fading to transparent bottom-left to let green show */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to bottom left, hsl(0 0% 4% / 0.7) 30%, hsl(0 0% 4% / 0.2) 70%, transparent 100%)'
      }} />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between px-6 md:px-12 pt-28 pb-16">
        {/* Title - two lines only */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-[1.15] tracking-wide">
            <TextReveal text={'\u201CBUILD BRANDS'} staggerDelay={0.04} />
            <br />
            <TextReveal text={'WITH DIRECTION, NOT TRENDS.\u201D'} staggerDelay={0.04} />
          </h1>
        </motion.div>

        {/* Three subtitle lines - right aligned */}
        <motion.div 
          className="flex flex-col items-end text-right space-y-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs md:text-sm lg:text-base text-foreground/85 tracking-[0.15em]">
            WE TRANSFORM BUSINESSES INTO BRANDS PEOPLE RECOGNIZE, REMEMBER, AND RETURN TO.
          </p>
          <p className="text-xs md:text-sm lg:text-base text-foreground/85 tracking-[0.15em]">
            IDENTITY → CONTENT → EXPERIENCE
          </p>
          <p className="text-xs md:text-sm lg:text-base text-foreground/85 tracking-[0.15em]">
            WE BRING CLARITY AND DIRECTION ACROSS EVERY PART OF THE BRAND.
          </p>
        </motion.div>

        {/* Two lime accent lines - bottom right */}
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
