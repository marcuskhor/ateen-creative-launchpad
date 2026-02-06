import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.a 
            href="#"
            className="text-sm tracking-[0.3em] font-medium text-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            ATEEN CREATIVE
          </motion.a>

          <div className="flex items-center gap-8">
            <a 
              href="mailto:hello@ateencreative.com" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
            >
              hello@ateencreative.com
            </a>
          </div>

          <p className="text-xs text-muted-foreground tracking-wide">
            © {new Date().getFullYear()} ATEEN CREATIVE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
