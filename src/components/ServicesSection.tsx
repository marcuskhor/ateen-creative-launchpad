import AnimatedSection, { LineReveal } from './AnimatedSection';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  { title: 'BRAND FOUNDATION', description: 'ALIGN THE DIRECTION.' },
  { title: 'CONTENT SYSTEM & SOCIAL MANAGEMENT', description: 'SYSTEMIZE THE CONTENT.' },
  { title: 'CONTENT PRODUCTION', description: 'CREATE THE ASSETS.' },
  { title: 'WEBSITE EXPERIENCE', description: 'SHAPE THE EXPERIENCE.' },
  { title: 'SPACE VISUAL SET-UP', description: 'BRING IT INTO SPACE.' },
  { title: 'LAUNCH & MARKETING ACTIVATION', description: 'ACTIVATE THE BRAND.' },
];

const ServiceItem = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <motion.div 
      ref={ref}
      className="flex items-start gap-4 group cursor-default py-4"
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
      transition={{ 
        duration: 0.6, 
        delay: isInView ? index * 0.08 : 0,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <motion.div 
        className="service-dot mt-2"
        animate={isInView ? { scale: [1, 1.5, 1] } : { scale: 1 }}
        transition={{ duration: 0.4, delay: index * 0.08 + 0.2 }}
      />
      <div>
        <h3 className="text-lg md:text-xl text-foreground tracking-wide group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>
        <motion.p 
          className="text-sm text-muted-foreground tracking-wide mt-1"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: index * 0.08 + 0.1 }}
        >
          {service.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 lg:py-40 bg-background">
      <div className="container px-6 md:px-12">
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.1em] text-foreground mb-1">
              SERVICES
            </h2>
            <p className="text-sm text-muted-foreground tracking-[0.15em]">
              OUR CORE WORK IS <span className="text-foreground font-bold">END-TO-END</span> BRAND EXECUTION.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-4 pl-2">
          {services.map((service, index) => (
            <ServiceItem key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
