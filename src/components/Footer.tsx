import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });

  return (
    <footer className="py-16 bg-background border-t border-border/50">
      <motion.div 
        ref={containerRef}
        className="container px-6 md:px-12"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Link 
            to="/"
            className="text-sm tracking-[0.3em] font-medium text-foreground hover:text-primary transition-colors duration-300"
          >
            ATEEN CREATIVE
          </Link>

          <div className="flex items-center gap-8">
            <motion.a 
              href="mailto:hello@ateencreative.com" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              whileHover={{ y: -2 }}
            >
              hello@ateencreative.com
              <span className="absolute -bottom-1 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.a>
          </div>

          <p className="text-xs text-muted-foreground tracking-wide">
            © {new Date().getFullYear()} ATEEN CREATIVE
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
