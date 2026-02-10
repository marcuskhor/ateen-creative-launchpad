import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'HOME', hash: '' },
    { href: '/about', label: 'ABOUT US', hash: '' },
    { href: '/about', label: 'SERVICES', hash: '#services' },
    { href: '/about', label: 'CONCEPT SYSTEMS', hash: '#concepts' },
    { href: '/work', label: 'START A PROJECT', hash: '' },
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    setIsMenuOpen(false);
    
    if (link.hash && location.pathname === link.href) {
      // Same page, just scroll
      const el = document.querySelector(link.hash);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
    // For cross-page navigation with hash, we handle in useEffect
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between px-6 md:px-12 py-6">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-foreground hover:text-primary transition-colors z-50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Link to="/" className="text-sm tracking-[0.3em] font-medium text-foreground z-50">
          ATEEN CREATIVE
        </Link>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/98 backdrop-blur-sm z-40"
          >
            <motion.div 
              className="flex flex-col justify-center h-full px-12 md:px-20 gap-10"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + index * 0.06, duration: 0.4 }}
                >
                  <Link
                    to={link.hash ? `${link.href}${link.hash}` : link.href}
                    onClick={() => handleNavClick(link)}
                    className={`flex items-center gap-3 text-xl md:text-2xl font-light tracking-[0.15em] transition-colors ${
                      location.pathname === link.href && !link.hash ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                  >
                    <span className="text-foreground/40">|</span>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
