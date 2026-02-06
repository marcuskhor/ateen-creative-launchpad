import AnimatedSection from './AnimatedSection';

const services = [
  { title: 'BRAND FOUNDATION', description: 'ALIGN THE DIRECTION.' },
  { title: 'CONTENT SYSTEM & SOCIAL MANAGEMENT', description: 'SYSTEMIZE THE CONTENT.' },
  { title: 'CONTENT PRODUCTION', description: 'CREATE THE ASSETS.' },
  { title: 'WEBSITE EXPERIENCE', description: 'SHAPE THE EXPERIENCE.' },
  { title: 'SPACE VISUAL SET-UP', description: 'BRING IT INTO SPACE.' },
  { title: 'LAUNCH & MARKETING ACTIVATION', description: 'ACTIVATE THE BRAND.' },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container px-6 md:px-12">
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-heading font-light tracking-wide text-foreground mb-4">
              SERVICES
            </h2>
            <p className="text-muted-foreground tracking-wide">
              OUR CORE WORK IS <span className="text-foreground font-medium">END-TO-END</span> BRAND EXECUTION.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1} direction="left">
              <div className="flex items-start gap-4 group cursor-default">
                <div className="service-dot mt-2 group-hover:scale-150 transition-transform duration-300" />
                <div>
                  <h3 className="text-lg md:text-xl text-foreground tracking-wide group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground tracking-wide mt-1">
                    {service.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
