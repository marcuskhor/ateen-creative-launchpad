import AnimatedSection, { LineReveal, Parallax } from './AnimatedSection';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import workspaceImage from '@/assets/workspace.jpg';

const expectations = [
  'DIRECTION ALIGNMENT',
  'SYSTEM PLANNING',
  'EXECUTION & DELIVERY',
];

const WorkingSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 0.5, 0.5, 0.2]);

  return (
    <section id="work" ref={sectionRef} className="section-padding bg-background relative min-h-screen">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${workspaceImage})`,
          y: imageY,
          opacity: imageOpacity
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />

      <div className="container px-6 md:px-12 relative z-10">
        <AnimatedSection>
          <h2 className="text-heading font-light tracking-wide text-foreground mb-20">
            WORKING WITH ATEEN
          </h2>
        </AnimatedSection>

        <div className="space-y-16">
          {/* How We Work */}
          <AnimatedSection direction="left">
            <div>
              <LineReveal className="w-24 mb-6" />
              <h3 className="text-xl font-medium text-foreground tracking-wide mb-6">
                HOW WE WORK
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                WE BELIEVE STRONG RESULTS COME FROM CLARITY AND ALIGNMENT. BEFORE EXECUTION BEGINS, WE MAKE SURE DIRECTION, PRIORITIES, AND EXPECTATIONS ARE CLEAR — SO THE WORK MOVES FORWARD WITHOUT CONFUSION OR REWORK.
              </p>
            </div>
          </AnimatedSection>

          {/* What To Expect */}
          <AnimatedSection delay={0.15} direction="left">
            <div>
              <LineReveal className="w-24 mb-6" />
              <h3 className="text-xl font-medium text-foreground tracking-wide mb-6">
                WHAT TO EXPECT
              </h3>
              <ol className="space-y-4">
                {expectations.map((item, index) => (
                  <motion.li 
                    key={item} 
                    className="flex items-center gap-4 text-muted-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <span className="text-primary font-medium text-lg">{index + 1}.</span>
                    {item}
                  </motion.li>
                ))}
              </ol>
            </div>
          </AnimatedSection>

          {/* Who We Work Best With - now below */}
          <AnimatedSection delay={0.2} direction="left">
            <div>
              <LineReveal className="w-24 mb-6" />
              <h3 className="text-xl font-medium text-foreground tracking-wide mb-6">
                WHO WE WORK BEST WITH
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                WE WORK BEST WITH TEAMS WHO VALUE STRUCTURE, LONG-TERM THINKING, AND CONSISTENCY. AND WHO ARE READY TO BUILD PROPERLY, NOT RUSH DISCONNECTED SOLUTIONS.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WorkingSection;
