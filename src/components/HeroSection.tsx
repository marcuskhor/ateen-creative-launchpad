import { motion } from 'framer-motion';
import { TextReveal } from './AnimatedSection';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Neon green gradient from bottom-left */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 100% 90% at 15% 95%, hsl(75 100% 50% / 0.55) 0%, hsl(75 100% 48% / 0.3) 30%, hsl(75 100% 45% / 0.1) 55%, transparent 80%)'
      }} />

      {/* Left side vertical text - toward top */}
      <div className="absolute left-6 md:left-12 top-[35%] -translate-y-1/2 z-10 hidden md:flex flex-col items-center">
        <p className="text-sm tracking-[0.2em] text-foreground/60 [writing-mode:vertical-lr] rotate-180">
          NOT TREND·DRIVEN. DIRECTION LED.
        </p>
      </div>

      {/* Right side vertical text - toward bottom */}
      <div className="absolute right-6 md:right-12 top-[65%] -translate-y-1/2 z-10 hidden md:flex flex-col items-center gap-4">
        <div className="w-[2px] h-10 bg-primary" />
        <p className="text-sm tracking-[0.2em] text-foreground/60 [writing-mode:vertical-lr]">
          CLARITY CREATES RECOGNITION.
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between px-12 md:px-24 lg:px-32 pt-28 pb-16">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-foreground leading-[1.15] tracking-wide">
            <TextReveal text={'\u201CBUILD BRANDS'} staggerDelay={0.04} />
            <br />
            <TextReveal text={'WITH DIRECTION, NOT TRENDS.\u201D'} staggerDelay={0.04} />
          </h1>
        </motion.div>

        {/* Three subtitle lines - center/right aligned */}
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

        {/* CTA buttons - bottom right, aligned with subtitle end */}
        <motion.div 
          className="flex items-center justify-end gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <Link to="/work" className="group text-center" onClick={() => window.scrollTo(0, 0)}>
            <div className="w-20 h-[2px] bg-primary mb-3 mx-auto" />
            <span className="text-xs tracking-[0.2em] text-foreground/80 group-hover:text-primary transition-colors duration-300">
              START A<br />PROJECT
            </span>
          </Link>
          <Link to="/about#services" className="group text-center">
            <div className="w-20 h-[2px] bg-primary mb-3 mx-auto" />
            <span className="text-xs tracking-[0.2em] text-foreground/80 group-hover:text-primary transition-colors duration-300">
              VIEW<br />SERVICES
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
