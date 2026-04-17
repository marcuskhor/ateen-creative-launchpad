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

const ConceptAntiOverwork = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="pt-24 pb-0">

        {/* Nav Pills */}
        <div className="container px-6 md:px-12 pt-8">
          <AnimatedSection>
            <div className="flex flex-wrap gap-3 mb-12">
              {['BRAND FOUNDATION', 'VISUAL IDENTITY', 'PACKAGING', 'RETAIL EXPERIENCE'].map((pill) => (
                <span
                  key={pill}
                  className="px-4 py-1.5 border-2 rounded-full text-[10px] md:text-xs tracking-[0.15em] text-black"
                  style={{ borderColor: ORANGE }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Hero Title */}
        <div className="container px-6 md:px-12">
          <AnimatedSection delay={0.1}>
            <p className="text-sm md:text-base tracking-[0.12em] text-black/70 mb-4">
              A REBELLIOUS DECAF COFFEE BRAND.
            </p>
            <div className="mb-3">
              <img src={antiLogo} alt="Anti-Overwork" className="w-full max-w-[900px] h-auto" />
            </div>
            <p className="text-[10px] md:text-xs tracking-[0.15em] text-black/50">
              CONCEPT BY ATEEN
            </p>
          </AnimatedSection>
        </div>

        {/* Hero Image + Value Defined + Positioning */}
        <div className="container px-6 md:px-12 mt-12 md:mt-16">
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
              <div className="md:col-span-2 aspect-[16/10] overflow-hidden bg-black">
                <img src={antiShelf} alt="Anti-Overwork retail shelf" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold tracking-[0.08em] text-black mb-3">
                  VALUE DEFINED
                </h2>
                <p className="text-xs md:text-sm tracking-[0.1em] text-black/60 mb-8">
                  COFFEE, NOT CAFFEINE. REST IS PRODUCTIVITY.
                </p>
                <h3 className="text-xl md:text-2xl font-bold tracking-[0.08em] text-black mb-4">
                  POSITIONING
                </h3>
                <p className="text-[10px] md:text-xs tracking-[0.08em] text-black/60 leading-relaxed mb-3">
                  ATEEN POSITIONED ANTI-OVERWORK AS A REBELLIOUS DECAF BRAND THAT REJECTS HUSTLE CULTURE AND BURNOUT.
                </p>
                <p className="text-[10px] md:text-xs tracking-[0.08em] text-black/60 leading-relaxed">
                  INSTEAD OF SELLING ENERGY, THE BRAND SELLS PERMISSION TO SLOW DOWN — TURNING ATTITUDE INTO IDENTITY AND EVERYDAY EXPERIENCE.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Principles */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.06em] text-black mb-6">
              PRINCIPLES
            </h2>
            <div className="space-y-1 mb-4">
              <p className="text-xs md:text-sm tracking-[0.1em] text-black/80 font-semibold">REST OVER HUSTLE</p>
              <p className="text-xs md:text-sm tracking-[0.1em] text-black/80 font-semibold">RITUAL OVER STIMULATION</p>
              <p className="text-xs md:text-sm tracking-[0.1em] text-black/80 font-semibold">HUMAN OVER OUTPUT</p>
            </div>
            <p className="text-[10px] md:text-xs tracking-[0.08em] text-black/50 leading-relaxed max-w-xl">
              THESE PRINCIPLES SHAPED ANTI-OVERWORK'S VISUAL LANGUAGE, PRODUCT SYSTEM, AND CAMPAIGN ATTITUDE.
            </p>
          </AnimatedSection>
        </div>

        {/* Divider */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24">
          <div className="border-t border-black/10" />
        </div>

        {/* Visual Identity — ERROR 404 motif + Logo system */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {/* Left — Logo system */}
            <AnimatedSection delay={0.1}>
              <div>
                <span
                  className="inline-block px-4 py-1.5 border-2 rounded-full text-[10px] md:text-xs tracking-[0.15em] text-black mb-8"
                  style={{ borderColor: ORANGE }}
                >
                  LOGO SYSTEM
                </span>
                <div className="mb-8 bg-white p-6 border border-black/5">
                  <img src={antiLogo} alt="Anti-Overwork logo" className="w-full h-auto" />
                </div>
                <p className="text-[10px] md:text-xs tracking-[0.08em] text-black/60 leading-relaxed mb-3">
                  ATEEN BUILT THE LOGO AROUND A SINGLE COFFEE BEAN REPLACING THE "O" — A QUIET ICON OF REBELLION INSIDE AN OTHERWISE INDUSTRIAL WORDMARK.
                </p>
                <p className="text-[10px] md:text-xs tracking-[0.08em] text-black/60 leading-relaxed">
                  THE TYPOGRAPHY IS BLOCKY AND CONFRONTATIONAL, REFLECTING THE BRAND'S STANCE AGAINST OVERWORK CULTURE.
                </p>
              </div>
            </AnimatedSection>

            {/* Right — Error 404 motif */}
            <AnimatedSection delay={0.2}>
              <div className="md:pt-12">
                <span
                  className="inline-block px-4 py-1.5 border-2 rounded-full text-[10px] md:text-xs tracking-[0.15em] text-black mb-8"
                  style={{ borderColor: ORANGE }}
                >
                  VISUAL MOTIF
                </span>
                <p className="text-[10px] md:text-xs tracking-[0.08em] text-black/60 leading-relaxed mb-3">
                  THE ERROR 404 MOTIF ANCHORS THE VISUAL LANGUAGE — A SYSTEM-LEVEL MESSAGE THAT CAFFEINE, AND THE CULTURE BUILT AROUND IT, IS NO LONGER FOUND.
                </p>
                <p className="text-[10px] md:text-xs tracking-[0.08em] text-black/60 leading-relaxed mb-6">
                  REPEATED OUTLINED TYPOGRAPHY GIVES THE BRAND A GLITCHED, DIGITAL ATTITUDE WHILE PRESERVING NEGATIVE SPACE.
                </p>
                <div className="bg-white p-4 border border-black/5">
                  <img src={antiError404} alt="Error 404 visual motif" className="w-full h-auto" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Divider */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24">
          <div className="border-t border-black/10" />
        </div>

        {/* Packaging System */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-10">
              <span
                className="inline-block px-4 py-1.5 border-2 rounded-full text-[10px] md:text-xs tracking-[0.15em] text-black mb-6"
                style={{ borderColor: ORANGE }}
              >
                PACKAGING SYSTEM
              </span>
              <p className="text-[10px] md:text-xs tracking-[0.08em] text-black/60 leading-relaxed max-w-xl mx-auto mb-2">
                ATEEN DESIGNED A FAMILY OF PACKAGING — DECAF COFFEE BAGS, CANNED DRINKS, AND SIDE PRODUCTS LIKE BREAD BOXES — UNIFIED BY THE 404 MOTIF.
              </p>
              <p className="text-[10px] md:text-xs tracking-[0.08em] text-black/60 leading-relaxed max-w-xl mx-auto">
                EACH FORMAT CARRIES THE SAME MESSAGE: COFFEE, NOT CAFFEINE.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white">
              <img src={antiPackaging} alt="Anti-Overwork packaging family" className="w-full h-auto" />
            </div>
          </AnimatedSection>
        </div>

        {/* Divider */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24">
          <div className="border-t border-black/10" />
        </div>

        {/* Sticker / Brand Asset System */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.1}>
              <div>
                <span
                  className="inline-block px-4 py-1.5 border-2 rounded-full text-[10px] md:text-xs tracking-[0.15em] text-black mb-8"
                  style={{ borderColor: ORANGE }}
                >
                  BRAND ASSETS
                </span>
                <p className="text-[10px] md:text-xs tracking-[0.08em] text-black/60 leading-relaxed mb-3">
                  A STICKER SYSTEM EXTENDS THE BRAND BEYOND PRODUCT — TURNING SLOGANS, WARNINGS AND UI FRAGMENTS INTO COLLECTIBLE OBJECTS.
                </p>
                <p className="text-[10px] md:text-xs tracking-[0.08em] text-black/60 leading-relaxed">
                  EACH STICKER IS A SMALL ACT OF RESISTANCE AGAINST WORK MODE — DESIGNED TO LIVE ON LAPTOPS, BOTTLES, AND NOTEBOOKS.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <img src={antiStickers} alt="Anti-Overwork sticker sheet" className="w-full h-auto" />
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* More Concept Work */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24 pb-24">
          <AnimatedSection delay={0.1}>
            <div className="text-center">
              <Link
                to="/about#concepts"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block px-6 py-2 border-2 rounded-full text-xs tracking-[0.15em] text-black hover:bg-black/5 transition-colors"
                style={{ borderColor: ORANGE }}
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
