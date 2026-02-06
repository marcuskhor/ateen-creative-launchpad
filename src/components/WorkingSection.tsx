import AnimatedSection from './AnimatedSection';
import workspaceImage from '@/assets/workspace.jpg';

const expectations = [
  'DIRECTION ALIGNMENT',
  'SYSTEM PLANNING',
  'EXECUTION & DELIVERY',
];

const WorkingSection = () => {
  return (
    <section id="work" className="section-padding bg-background relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${workspaceImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      <div className="container px-6 md:px-12 relative z-10">
        <AnimatedSection>
          <h2 className="text-heading font-light tracking-wide text-foreground mb-16">
            WORKING WITH ATEEN
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16">
          {/* How We Work */}
          <div>
            <AnimatedSection>
              <div className="accent-line mb-6 origin-left" />
              <h3 className="text-xl font-medium text-foreground tracking-wide mb-4">
                HOW WE WORK
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                WE BELIEVE STRONG RESULTS COME FROM CLARITY AND ALIGNMENT. BEFORE EXECUTION BEGINS, WE MAKE SURE DIRECTION, PRIORITIES, AND EXPECTATIONS ARE CLEAR — SO THE WORK MOVES FORWARD WITHOUT CONFUSION OR REWORK.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="mt-12">
              <div className="accent-line mb-6 origin-left" />
              <h3 className="text-xl font-medium text-foreground tracking-wide mb-4">
                WHAT TO EXPECT
              </h3>
              <ol className="space-y-3">
                {expectations.map((item, index) => (
                  <li key={item} className="flex items-center gap-4 text-muted-foreground">
                    <span className="text-primary font-medium">{index + 1}.</span>
                    {item}
                  </li>
                ))}
              </ol>
            </AnimatedSection>
          </div>

          {/* Who We Work With */}
          <div>
            <AnimatedSection delay={0.3}>
              <div className="accent-line mb-6 origin-left" />
              <h3 className="text-xl font-medium text-foreground tracking-wide mb-4">
                WHO WE WORK BEST WITH
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                WE WORK BEST WITH TEAMS WHO VALUE STRUCTURE, LONG-TERM THINKING, AND CONSISTENCY. AND WHO ARE READY TO BUILD PROPERLY, NOT RUSH DISCONNECTED SOLUTIONS.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingSection;
