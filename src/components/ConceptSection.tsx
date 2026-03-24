import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const conceptWorks = [
  {
    name: 'CHAPTER',
    tagline: 'SCENT AS NARRATIVE',
    turning: 'TURNING\nABSTRACT EMOTION\nINTO\nSTRUCTURE.',
    services: ['BRAND FOUNDATION', 'CONTENT SYSTEM', 'WEBSITE EXPERIENCE', 'CONTENT PRODUCTION'],
    link: '/concept/chapter',
  },
  {
    name: 'LUNORA',
    tagline: 'DESIGNED FOR RECOVERY.',
    turning: 'TURNING\nRECOVERY\nINTO\nIDENTITY AND LAUNCH.',
    services: ['BRAND FOUNDATION', 'CONTENT SYSTEM', 'PACKAGING LANGUAGE', 'PRODUCT EXPERIENCE'],
    link: '/concept/lunora',
  },
  {
    name: 'ANTI-\nOVERWORK',
    tagline: 'NO CAFFEINE. NO HUSTLE.',
    turning: 'TURNING\nATTITUDE\nINTO\nIDENTITY AND EXPERIENCE.',
    services: ['BRAND FOUNDATION', 'VIDEO CONTENT LOGIC', 'LAUNCH CAMPAIGN', 'SPACE VISUAL LOGIC'],
    link: '/concept/anti-overwork',
  },
];

const ConceptCard = ({ concept, index }: { concept: typeof conceptWorks[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={concept.link}
        onClick={() => window.scrollTo(0, 0)}
        className="block bg-primary/10 border border-primary/30 p-6 md:p-8 hover:bg-primary/20 transition-colors duration-300 group"
      >
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold tracking-[0.05em] text-foreground whitespace-pre-line leading-tight">
            {concept.name}
          </h3>
          <p className="text-xs md:text-sm text-foreground/60 tracking-[0.15em] mt-2">
            {concept.tagline}
          </p>
        </div>

        <div className="mb-6">
          <p className="text-xs text-primary tracking-[0.1em] whitespace-pre-line leading-relaxed">
            {concept.turning}
          </p>
        </div>

        <ul className="space-y-1">
          {concept.services.map((s) => (
            <li key={s} className="text-[10px] md:text-xs text-foreground/50 tracking-[0.1em] flex items-center gap-2">
              <span className="w-1 h-1 bg-primary/60 flex-shrink-0" />
              {s}
            </li>
          ))}
        </ul>
      </Link>
    </motion.div>
  );
};

const ConceptSection = () => {
  return (
    <section id="concepts">
      {/* Title */}
      <div className="bg-background py-16 md:py-24">
        <div className="container px-6 md:px-12">
          <AnimatedSection direction="scale">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.15em] text-foreground text-center">
              CONCEPT WORKS
            </h2>
          </AnimatedSection>
        </div>
      </div>

      {/* Three concept cards */}
      <div className="bg-background pb-8">
        <div className="container px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {conceptWorks.map((concept, index) => (
              <ConceptCard key={concept.name} concept={concept} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Text below */}
      <div className="bg-background py-16 md:py-24">
        <div className="container px-6 md:px-12">
          <div className="max-w-3xl mx-auto space-y-10">
            <AnimatedSection delay={0.1}>
              <p className="text-sm md:text-base text-foreground/80 tracking-[0.1em] leading-relaxed">
                BUILDING A BRAND ISN'T ABOUT DOING MORE.
              </p>
              <p className="text-sm md:text-base text-foreground/80 tracking-[0.1em] leading-relaxed">
                IT'S ABOUT DOING THE RIGHT THINGS IN THE RIGHT ORDER,
              </p>
              <p className="text-sm md:text-base text-foreground/80 tracking-[0.1em] leading-relaxed">
                AND DOING THEM CONSISTENTLY.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-sm md:text-base text-foreground/60 tracking-[0.1em] leading-relaxed">
                MOST BRANDS STRUGGLE NOT BECAUSE THEY LACK EFFORT,
              </p>
              <p className="text-sm md:text-base text-foreground/60 tracking-[0.1em] leading-relaxed">
                BUT BECAUSE DESIGN, CONTENT, AND MARKETING MOVE IN DIFFERENT DIRECTIONS.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-sm md:text-base text-primary tracking-[0.1em] leading-relaxed">
                WE BRING EVERYTHING INTO ONE SYSTEM,
              </p>
              <p className="text-sm md:text-base text-primary tracking-[0.1em] leading-relaxed">
                SO DECISIONS ARE CLEAR, EXECUTION STAYS ALIGNED,
              </p>
              <p className="text-sm md:text-base text-primary tracking-[0.1em] leading-relaxed">
                AND QUALITY IS NEVER COMPROMISED AS THE BRAND GROWS.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
