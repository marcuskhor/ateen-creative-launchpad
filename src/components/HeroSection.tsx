import { motion } from 'framer-motion';
import heroMesh from '@/assets/hero-mesh.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-mesh-shift"
        style={{ backgroundImage: `url(${heroMesh})` }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/30" />
      
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <div className="relative z-10 container px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl"
        >
          <motion.h1 
            className="text-display font-light text-foreground mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            "BUILD BRANDS
            <br />
            WITH DIRECTION, NOT TRENDS."
          </motion.h1>

          <motion.div 
            className="space-y-4 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="text-subheading text-foreground/80 tracking-wide">
              WE TRANSFORM BUSINESSES INTO BRANDS PEOPLE RECOGNIZE, REMEMBER, AND RETURN TO.
            </p>
            
            <p className="text-lg text-primary tracking-widest">
              IDENTITY → CONTENT → EXPERIENCE
            </p>

            <p className="text-foreground/70">
              WE BRING CLARITY AND DIRECTION ACROSS EVERY PART OF THE BRAND.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-16 bg-gradient-to-b from-primary to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
