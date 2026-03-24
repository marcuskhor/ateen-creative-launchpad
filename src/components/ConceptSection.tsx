import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const conceptWorks = [
  {
    name: 'CHAPTER',
    logo: 'chapter',
    tagline: 'SCENT AS NARRATIVE',
    turningLabel: 'TURNING',
    turningHighlight: 'ABSTRACT EMOTION',
    turningInto: 'INTO',
    turningResult: 'STRUCTURE.',
    services: ['BRAND FOUNDATION', 'CONTENT SYSTEM', 'WEBSITE EXPERIENCE', 'CONTENT PRODUCTION'],
    link: '/concept/chapter',
  },
  {
    name: 'LUNORA',
    logo: 'lunora',
    tagline: 'DESIGNED FOR RECOVERY.',
    turningLabel: 'TURNING',
    turningHighlight: 'RECOVERY',
    turningInto: 'INTO',
    turningResult: 'IDENTITY AND LAUNCH.',
    services: ['BRAND FOUNDATION', 'CONTENT SYSTEM', 'PACKAGING LANGUAGE', 'PRODUCT EXPERIENCE'],
    link: '/concept/lunora',
  },
  {
    name: 'ANTI-\nOVERWORK',
    logo: 'anti-overwork',
    tagline: 'NO CAFFEINE. NO HUSTLE.',
    turningLabel: 'TURNING',
    turningHighlight: 'ATTITUDE',
    turningInto: 'INTO',
    turningResult: 'IDENTITY AND EXPERIENCE.',
    services: ['BRAND FOUNDATION', 'VIDEO CONTENT LOGIC', 'LAUNCH CAMPAIGN', 'SPACE VISUAL LOGIC'],
    link: '/concept/anti-overwork',
  },
];

const ConceptCard = ({ concept, index }: { concept: typeof conceptWorks[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={concept.link}
        onClick={() => window.scrollTo(0, 0)}
        className="block relative overflow-hidden border border-primary/30 hover:border-primary/60 transition-all duration-300 group h-full"
        style={{
          background: 'linear-gradient(160deg, hsl(75 40% 12%) 0%, hsl(75 30% 8%) 50%, hsl(0 0% 6%) 100%)',
        }}
      >
        {/* Top area with logo placeholder */}
        <div className="flex items-start justify-between p-6 md:p-8 pb-0">
          <div />
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-foreground/10 border border-foreground/20 flex items-center justify-center">
            <span className="text-[8px] md:text-[9px] text-foreground/50 tracking-wider uppercase">
              {concept.logo}
            </span>
          </div>
        </div>

        {/* Main content */}
        <div className="p-6 md:p-8 pt-4 md:pt-6 flex flex-col justify-between min-h-[380px] md:min-h-[420px]">
          {/* Title & tagline */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-[0.02em] text-foreground whitespace-pre-line leading-[1.1] mb-2">
              {concept.name}
            </h3>
            <p className="text-[10px] md:text-xs text-foreground/50 tracking-[0.15em]">
              {concept.tagline}
            </p>
          </div>

          {/* Turning statement */}
          <div className="my-6">
            <p className="text-xs text-primary/80 tracking-[0.12em] leading-relaxed">
              {concept.turningLabel}
            </p>
            <p className="text-sm md:text-base text-primary font-bold tracking-[0.08em] leading-tight">
              {concept.turningHighlight}
            </p>
            <p className="text-xs text-primary/80 tracking-[0.12em] leading-relaxed mt-1">
              {concept.turningInto}
            </p>
            <p className="text-xs text-primary/80 tracking-[0.12em] leading-relaxed">
              {concept.turningResult}
            </p>
          </div>

          {/* Service list */}
          <ul className="space-y-1.5 mt-auto">
            {concept.services.map((s) => (
              <li key={s} className="text-[9px] md:text-[10px] text-foreground/40 tracking-[0.12em] flex items-center gap-2">
                <span className="w-1 h-1 bg-primary/50 flex-shrink-0 rounded-full" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Hover glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, hsl(75 100% 50% / 0.05), transparent 70%)' }}
        />
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
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
