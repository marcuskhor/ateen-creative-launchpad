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
              ATEEN WORKS SDN. BHD. (1675263-T)
            </h3>
            <div className="space-y-1 text-xs text-muted-foreground tracking-wide">
              <p><span className="font-medium text-foreground">T</span> : +60 16-625 0750</p>
              <p><span className="font-medium text-foreground">E</span> : HELLO@ATEENWORKS.COM</p>
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
              <a href="https://wa.me/60166250750" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
              {/* Mail */}
              <a href="mailto:hello@ateenworks.com" className="text-muted-foreground hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/ateenworks?igsh=azlybTF1YWFjdjU0&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
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
              {/* Behance */}
              <a href="https://www.behance.net/ateenworksmy" target="_blank" rel="noopener noreferrer" aria-label="Behance" className="text-muted-foreground hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.799 5.698c.589 0 1.12.051 1.606.156.484.103.9.273 1.252.51.349.236.62.557.814.953.194.398.29.892.29 1.475 0 .633-.144 1.158-.433 1.582-.288.422-.716.768-1.277 1.035.766.219 1.337.605 1.715 1.158.375.554.562 1.222.562 2.002 0 .629-.121 1.172-.366 1.633-.245.459-.576.836-.99 1.131-.415.297-.891.514-1.43.66-.537.143-1.094.213-1.668.213H0V5.698h7.799zm-.482 4.97c.479 0 .875-.115 1.184-.343.308-.227.461-.6.461-1.117 0-.288-.052-.523-.156-.707-.105-.18-.243-.323-.422-.43-.18-.103-.387-.176-.622-.215-.236-.04-.479-.058-.733-.058H3.43v2.87h3.887zm.215 5.214c.262 0 .515-.025.756-.077.243-.052.456-.137.643-.254.184-.117.331-.27.443-.464.108-.197.165-.45.165-.764 0-.61-.172-1.045-.515-1.308-.343-.262-.798-.392-1.365-.392H3.43v3.259h4.102zM17.477 15.999c.466.448 1.137.674 2.013.674.629 0 1.169-.158 1.622-.474.452-.316.731-.65.834-1.001h2.609c-.418 1.296-1.058 2.224-1.92 2.781-.861.559-1.904.836-3.123.836-.851 0-1.617-.135-2.297-.41-.68-.272-1.255-.66-1.731-1.163-.475-.503-.842-1.104-1.099-1.802-.258-.696-.387-1.464-.387-2.301 0-.811.133-1.567.398-2.265.265-.699.642-1.303 1.131-1.812.488-.51 1.07-.911 1.745-1.205.674-.292 1.421-.439 2.239-.439.916 0 1.713.177 2.394.531.679.354 1.236.829 1.671 1.422.436.594.749 1.272.941 2.032.193.761.262 1.555.207 2.385h-7.798c0 .849.291 1.66.756 2.108v.103zM4.32 4.04h6.066v1.633H4.32V4.04z"/>
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
