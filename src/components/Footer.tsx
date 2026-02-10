import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Footer = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  return (
    <footer className="py-16 md:py-24 bg-background border-t border-border/30">
      <motion.div 
        ref={containerRef}
        className="container px-6 md:px-12"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side - Company info */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium tracking-[0.2em] text-foreground">
              ATEEN CREATIVE SDN.BHD (XXXXXXX-0)
            </h3>
            <div className="space-y-1 text-xs text-muted-foreground tracking-wide">
              <p><span className="font-medium text-foreground">T</span> : + 60 125883370</p>
              <p><span className="font-medium text-foreground">E</span> : CONNECT@ATEENCREATIVE.COM</p>
              <p><span className="font-medium text-foreground">A</span> : SKYPOD SQUARE, PERSIARAN PUCHONG JAYA SELATAN,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BANDAR PUCHONG JAYA, 47100 PUCHONG, SELANGOR.</p>
            </div>
          </div>

          {/* Right side - Tagline and socials */}
          <div className="flex flex-col items-end justify-between gap-8">
            <div className="text-right">
              <p className="text-xs tracking-[0.25em] text-muted-foreground leading-relaxed">
                WE DON'T JUST DESIGN.<br />
                WE EXECUTE BRANDS INTO<br />
                CONSISTENT, REAL-WORLD OUTCOMES.
              </p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-5">
              {/* WhatsApp */}
              <a href="https://wa.me/60125883370" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
              {/* Mail */}
              <a href="mailto:connect@ateencreative.com" className="text-muted-foreground hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              {/* TikTok */}
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
