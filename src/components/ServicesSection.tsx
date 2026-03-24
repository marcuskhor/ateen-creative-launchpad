import AnimatedSection from './AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'BRAND FOUNDATION',
    subtitle: 'DEFINE THE DIRECTION OF THE BRAND.',
    items: ['BRAND POSITIONING', 'BRAND CORE & VALUES', 'TARGET AUDIENCE', 'BRAND DIRECTION'],
  },
  {
    number: '02',
    title: 'BRAND SYSTEM DEVELOPMENT',
    subtitle: 'TURN THE DIRECTION INTO VISUAL EXPRESSION.',
    items: ['VISUAL IDENTITY SYSTEM', 'LAYOUT SYSTEM', 'BRAND COMMUNICATION SYSTEM', 'APPLICATION PRINCIPLES'],
  },
  {
    number: '03',
    title: 'BRAND IMPLEMENTATION',
    subtitle: 'APPLY THE BRAND ACROSS REAL TOUCHPOINTS.',
    items: ['WEBSITE DEVELOPMENT', 'DIGITAL EXPERIENCE', 'BRAND MATERIALS', 'MARKETING & CAMPAIGN', 'PRODUCTION SUPPORT'],
  },
];

const ServiceAccordion = ({ service, isOpen, onToggle }: { service: typeof services[0]; isOpen: boolean; onToggle: () => void }) => {
  return (
    <div className="border-t border-primary/40">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 md:py-8 group cursor-pointer"
      >
        <div className="flex items-baseline gap-4 md:gap-8">
          <span className="text-5xl md:text-7xl lg:text-8xl font-medium text-foreground/20 leading-none">
            {service.number}
          </span>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-[0.1em] text-foreground group-hover:text-primary transition-colors duration-300 text-left">
            {service.title}
          </h3>
        </div>
        <div className="text-primary">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 md:pb-12 pl-16 md:pl-28 lg:pl-36 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <p className="text-sm md:text-base text-foreground/60 tracking-[0.1em]">
                {service.subtitle}
              </p>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="text-xs md:text-sm tracking-[0.1em] text-foreground/80 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="services" className="py-24 md:py-32 lg:py-40 bg-background">
      <div className="container px-6 md:px-12">
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.1em] text-foreground mb-1">
              SERVICES
            </h2>
          </div>
        </AnimatedSection>

        <div>
          {services.map((service, index) => (
            <ServiceAccordion
              key={service.number}
              service={service}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
          <div className="border-t border-primary/40" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
