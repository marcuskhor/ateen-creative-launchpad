import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Link } from 'react-router-dom';

import antiLogo from '@/assets/anti-logo.png';
import antiError404 from '@/assets/anti-error404.png';
import antiPackaging from '@/assets/anti-packaging.png';
import antiShelf from '@/assets/anti-shelf.jpg';
import antiStickers from '@/assets/anti-stickers.png';
import antiMenuSign from '@/assets/anti-menu-sign.png';

const ORANGE = '#ff5a1f';
const NEON = 'hsl(var(--primary))';

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span
    className="inline-block px-6 py-2 border-2 rounded-full text-xs md:text-sm font-bold tracking-[0.18em] text-white"
    style={{ borderColor: NEON }}
  >
    {children}
  </span>
);

const ConceptAntiOverwork = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-24 pb-0">

        {/* Top Pills */}
        <div className="container px-6 md:px-12 pt-2">
          <AnimatedSection>
            <div className="flex justify-center gap-12 mb-6">
              <Pill>BRAND POSITION</Pill>
              <Pill>BRAND CONTRAST</Pill>
            </div>
          </AnimatedSection>
        </div>

        {/* Hero Logo */}
        <div className="container px-6 md:px-12">
          <AnimatedSection delay={0.1}>
            <div className="flex justify-center mb-2">
              <img src={antiLogo} alt="Anti-Overwork" className="w-full max-w-[900px] h-auto" />
            </div>
            <p className="text-center text-sm md:text-base tracking-[0.15em] text-white/80 mb-6">
              A COFFEE BRAND DESIGNED WITHOUT URGENCY.
            </p>
          </AnimatedSection>
        </div>

        {/* Brand Position + Brand Contrast + Shelf + Stickers */}
        <div className="container px-6 md:px-12 mt-8 md:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* LEFT — Position + Contrast */}
            <AnimatedSection delay={0.1}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-[0.05em] mb-3" style={{ color: ORANGE }}>
                  BRAND POSITION
                </h2>
                <p className="text-xs md:text-sm tracking-[0.1em] text-white/80 mb-12">
                  COFFEE WITHOUT PERFORMANCE EXPECTATION.
                </p>

                <h2 className="text-3xl md:text-4xl font-bold tracking-[0.05em] mb-4" style={{ color: ORANGE }}>
                  BRAND CONTRAST
                </h2>
                <p className="text-xs md:text-sm tracking-[0.08em] text-white/80 leading-relaxed mb-2">
                  MOST COFFEE BRANDS ARE BUILT TO INCREASE OUTPUT.
                </p>
                <p className="text-xs md:text-sm tracking-[0.08em] text-white/80 leading-relaxed mb-4">
                  ANTI-OVERWORK IS BUILT TO REMOVE PRESSURE.
                </p>
                <p className="text-xs md:text-sm tracking-[0.08em] text-white/60 leading-relaxed mb-4">
                  WHILE OTHERS OPTIMIZE ENERGY,<br/>THIS SYSTEM REDUCES DEPENDENCY.
                </p>
                <p className="text-xs md:text-sm tracking-[0.08em] text-white/60 leading-relaxed">
                  NOT MORE FOCUS.<br/>LESS URGENCY.
                </p>
              </div>
            </AnimatedSection>

            {/* RIGHT — Shelf + Stickers */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <img src={antiShelf} alt="Anti-Overwork retail shelf" className="w-full h-auto" />
                <div className="flex justify-end">
                  <img src={antiStickers} alt="Anti-Overwork sticker sheet" className="w-[60%] h-auto" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Packaging System */}
        <div className="container px-6 md:px-12 mt-24 md:mt-32">
          <AnimatedSection delay={0.1}>
            <div className="mb-10">
              <Pill>PACKAGING SYSTEM</Pill>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* LEFT — packaging image + system text */}
            <AnimatedSection delay={0.2}>
              <div>
                <img src={antiPackaging} alt="Anti-Overwork packaging family" className="w-full h-auto mb-8" />
                <p className="text-xs md:text-sm tracking-[0.08em] text-white/80 leading-relaxed mb-2">
                  THE SYSTEM IS APPLIED CONSISTENTLY ACROSS OBJECTS<br/>TO REMOVE DECISION FATIGUE AND REDUCE VISUAL NOISE.
                </p>
                <p className="text-xs md:text-sm tracking-[0.08em] text-white/80 leading-relaxed mb-4">
                  EACH SURFACE IS LIMITED TO A SINGLE MESSAGE<br/>TO AVOID COMPETING SIGNALS.
                </p>
                <div className="text-xs md:text-sm tracking-[0.08em] text-white/70 leading-relaxed space-y-1">
                  <p>CAN → PRIMARY SIGNAL (404 / CAFFEINE NOT FOUND)</p>
                  <p>COFFEE BAG → DECLARATION (DECAF ONLY)</p>
                  <p>CUP → REPEATED INTERRUPTION (STICKERS / SYSTEM TEXT)</p>
                  <p>FOOD PACKAGING → HUMAN CONTRAST (TAKE A BREAD / LATER IS FINE)</p>
                </div>
              </div>
            </AnimatedSection>

            {/* RIGHT — Language System + Error 404 */}
            <AnimatedSection delay={0.3}>
              <div>
                <div className="mb-8">
                  <Pill>LANGUAGE SYSTEM</Pill>
                </div>
                <div className="relative">
                  <img src={antiError404} alt="Error 404 visual motif" className="w-full h-auto" />
                  <div className="absolute inset-0 flex flex-col justify-start pt-4 px-4">
                    <p className="text-xs md:text-sm tracking-[0.08em] text-white/90 leading-relaxed mb-3">
                      A REPEATED SIGNAL USED ACROSS ALL TOUCHPOINTS.<br/>
                      404 IS USED AS A PRIMARY STATE INDICATOR<br/>
                      TO SIGNAL INTERRUPTION RATHER THAN DECORATION.
                    </p>
                    <p className="text-xs md:text-sm tracking-[0.08em] text-white/90 leading-relaxed mb-3">
                      IT IS APPLIED TO MARK THE ABSENCE OF CAFFEINE,<br/>
                      AND TO VISUALLY REPRESENT A BREAK FROM CONTINUOUS OUTPUT.
                    </p>
                    <p className="text-xs md:text-sm tracking-[0.08em] text-white/90 leading-relaxed">
                      THIS REPEATED USE ALLOWS THE SIGNAL TO SHIFT<br/>
                      FROM INFORMATION TO RECOGNITION OVER TIME.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Space Visual Logic */}
        <div className="container px-6 md:px-12 mt-24 md:mt-32">
          <AnimatedSection delay={0.1}>
            <div className="flex justify-center mb-10">
              <Pill>SPACE VISUAL LOGIC</Pill>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <img src={antiMenuSign} alt="Anti-Overwork café menu signage" className="w-full h-auto" />
              <div className="md:pt-12">
                <p className="text-xs md:text-sm tracking-[0.08em] text-white/80 leading-relaxed mb-3">
                  THE SPACE IS DESIGNED AS A CONTROLLED SYSTEM<br/>TO REDUCE OVERSTIMULATION WITHIN THE ENVIRONMENT.
                </p>
                <p className="text-xs md:text-sm tracking-[0.08em] text-white/80 leading-relaxed mb-3">
                  THE MENU IS SIMPLIFIED<br/>TO REMOVE UNNECESSARY DECISION-MAKING.
                </p>
                <p className="text-xs md:text-sm tracking-[0.08em] text-white/80 leading-relaxed mb-3">
                  CLEAR SIGNALS ARE USED<br/>TO GUIDE MOVEMENT WITHOUT EXCESS INSTRUCTION.
                </p>
                <p className="text-xs md:text-sm tracking-[0.08em] text-white/80 leading-relaxed mb-3">
                  DISTRACTION IS MINIMIZED<br/>TO ALLOW THE USER TO SLOW DOWN NATURALLY.
                </p>
                <p className="text-xs md:text-sm tracking-[0.08em] text-white/80 leading-relaxed">
                  TEXT IS TREATED AS DIRECTION,<br/>FUNCTIONING AS A SYSTEM ELEMENT RATHER THAN DECORATION.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Video Content + Space Visual */}
        <div className="container px-6 md:px-12 mt-24 md:mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* LEFT — Video Content */}
            <AnimatedSection delay={0.1}>
              <div>
                <div className="mb-8">
                  <Pill>VIDEO CONTENT</Pill>
                </div>
                <div className="aspect-[9/16] bg-white flex items-center justify-center mb-6">
                  <p className="text-xl font-bold tracking-[0.1em]" style={{ color: ORANGE }}>
                    YOUTUBE<br/>SHORTS
                  </p>
                </div>
                <p className="text-xs md:text-sm tracking-[0.08em] text-white/80 leading-relaxed mb-3">
                  THE VIDEO IS STRUCTURED AS A CONTRAST<br/>TO MAKE THE SHIFT IN STATE VISIBLE.
                </p>
                <p className="text-xs md:text-sm tracking-[0.08em] text-white/80 leading-relaxed mb-3">
                  AN INITIAL PHASE OF FAST, REPETITIVE INPUT<br/>IS USED TO REPRESENT OVERLOAD.
                </p>
                <p className="text-xs md:text-sm tracking-[0.08em] text-white/80 leading-relaxed mb-3">
                  THIS IS INTERRUPTED BY A SYSTEM BREAK,<br/>CREATING A CLEAR DISRUPTION IN FLOW.
                </p>
                <p className="text-xs md:text-sm tracking-[0.08em] text-white/80 leading-relaxed">
                  THE FINAL PHASE SLOWS THE PACE,<br/>ALLOWING A CONTROLLED AND REDUCED STATE TO EMERGE.
                </p>
              </div>
            </AnimatedSection>

            {/* RIGHT — Space Visual placeholders */}
            <AnimatedSection delay={0.2}>
              <div>
                <div className="mb-8">
                  <Pill>SPACE VISUAL</Pill>
                </div>
                <div className="space-y-6">
                  <div className="aspect-[16/9] border-2" style={{ borderColor: NEON }} />
                  <div className="aspect-[16/9] border-2" style={{ borderColor: NEON }} />
                  <div className="aspect-[16/9] border-2" style={{ borderColor: NEON }} />
                </div>
                <div className="mt-8 space-y-3">
                  <p className="text-xs md:text-sm tracking-[0.08em] text-white/80 leading-relaxed">
                    THE PHYSICAL SPACE IS USED TO TRANSLATE THE SYSTEM<br/>INTO A TANGIBLE EXPERIENCE.
                  </p>
                  <p className="text-xs md:text-sm tracking-[0.08em] text-white/80 leading-relaxed">
                    METAL SURFACES ARE SELECTED<br/>TO REINFORCE A CONTROLLED AND INDUSTRIAL FEEL.
                  </p>
                  <p className="text-xs md:text-sm tracking-[0.08em] text-white/80 leading-relaxed">
                    SIGNAL COLORS ARE INTRODUCED<br/>TO CREATE CLEAR VISUAL INTERRUPTION WITHIN THE SPACE.
                  </p>
                  <p className="text-xs md:text-sm tracking-[0.08em] text-white/80 leading-relaxed">
                    THE STRUCTURE IS KEPT MINIMAL<br/>TO PREVENT VISUAL OVERLOAD AND MAINTAIN FOCUS.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* More Concept Work */}
        <div className="container px-6 md:px-12 mt-24 md:mt-32 pb-24">
          <AnimatedSection delay={0.1}>
            <div className="text-center">
              <Link
                to="/about#concepts"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block px-6 py-2 border-2 rounded-full text-xs tracking-[0.15em] text-white hover:bg-white/5 transition-colors"
                style={{ borderColor: NEON }}
              >
                MORE CONCEPT WORK
              </Link>
            </div>
          </AnimatedSection>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default ConceptAntiOverwork;
