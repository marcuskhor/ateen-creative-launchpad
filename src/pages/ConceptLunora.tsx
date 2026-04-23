import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import lunoraWordmark from '@/assets/lunora-wordmark.png';
import lunoraProductsLight from '@/assets/lunora-products-light.jpg';
import lunoraInfiniteCycle from '@/assets/lunora-infinite-cycle.png';
import lunoraInstagram from '@/assets/lunora-instagram-new.png';
import lunoraPackagingBathsalt from '@/assets/lunora-packaging-bathsalt.png';
import lunoraPackagingBodyoil from '@/assets/lunora-packaging-bodyoil.png';
import lunoraPackagingPillowmist from '@/assets/lunora-packaging-pillowmist.png';
import lunoraPackagingIncense from '@/assets/lunora-packaging-incense.png';
import lunoraStep1 from '@/assets/lunora-step1.jpg';
import lunoraStep2 from '@/assets/lunora-step2.jpg';
import lunoraStep3 from '@/assets/lunora-step3.jpg';
import lunoraStep4 from '@/assets/lunora-step4.jpg';

const packagingImages = [
  lunoraPackagingBathsalt,
  lunoraPackagingBodyoil,
  lunoraPackagingPillowmist,
  lunoraPackagingIncense,
];

const ConceptLunora = () => {
  const [packagingIndex, setPackagingIndex] = useState(0);

  const prevPackaging = () => setPackagingIndex((i) => (i === 0 ? packagingImages.length - 1 : i - 1));
  const nextPackaging = () => setPackagingIndex((i) => (i === packagingImages.length - 1 ? 0 : i + 1));

  return (
    <div className="min-h-screen bg-[#d3ddc0] text-[#39481f]">
      <Header />
      <main className="pt-24 pb-0">

        {/* Nav Pills */}
        <div className="container px-6 md:px-12 pt-8">
          <AnimatedSection>
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              {['BRAND CORE', 'BRAND DIRECTION'].map((pill) => (
                <span
                  key={pill}
                  className="px-5 py-1.5 border border-primary rounded-full text-xs md:text-sm tracking-[0.15em] text-black"
                >
                  {pill}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Hero: Lunora wordmark + subtitle */}
        <div className="container px-6 md:px-12">
          <AnimatedSection delay={0.1}>
            <div className="text-center">
              <img src={lunoraWordmark} alt="lunora" className="h-40 md:h-56 lg:h-72 mx-auto mb-4 object-contain" />
              <p className="text-sm md:text-base tracking-[0.2em] text-[#39481f]/70">
                A RECOVERY RITUAL WELLNESS BRAND
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Brand Direction + Brand Core */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24">
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Brand Direction */}
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.06em] text-[#39481f] mb-6">
                  BRAND DIRECTION
                </h2>
                <p className="text-xs md:text-sm tracking-[0.08em] text-[#39481f]/60 leading-relaxed mb-4">
                  WE POSITIONED LUNORA AS A RITUAL-BASED WELLNESS BRAND FOCUSED ON RESTORING BALANCE FOR THE OVERSTIMULATED MODERN MIND.
                </p>
                <p className="text-xs md:text-sm tracking-[0.08em] text-[#39481f]/60 leading-relaxed">
                  WHILE MANY WELLNESS BRANDS FOCUS PRIMARILY ON EXTERNAL RESULTS — APPEARANCE, FITNESS, OR PERFORMANCE. LUNORA CENTERS ON INNER RECOVERY. THE BRAND ENCOURAGES A SLOWER RHYTHM OF LIVING THROUGH SMALL DAILY RITUALS DESIGNED TO CALM THE MIND, RELEASE THE TENSION, AND GUIDE THE BODY BACK TO ITS NATURAL STATE OF BALANCE.
                </p>
              </div>
              {/* Brand Core */}
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.06em] text-[#39481f] mb-6">
                  BRAND CORE
                </h2>
                <p className="text-base md:text-lg tracking-[0.08em] text-[#39481f]/80 leading-relaxed">
                  RECOVERY BEGINS WHEN THE MIND RETURNS TO BALANCE.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Two images under Brand Core + Ritual System side by side */}
        <div className="container px-6 md:px-12 mt-12 md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Left - Ritual System */}
            <AnimatedSection delay={0.1}>
              <div>
                <span className="inline-block px-4 py-1.5 border border-primary rounded-full text-xs md:text-sm tracking-[0.15em] text-black mb-8">
                  RITUAL SYSTEM
                </span>
                <p className="text-xs md:text-sm tracking-[0.08em] text-[#39481f]/60 leading-relaxed mb-4">
                  TO TRANSLATE THE IDEA OF RECOVERY INTO A TANGIBLE EXPERIENCE, ATEEN DEVELOPED A STEP-BASED RITUAL SYSTEM.
                </p>
                <p className="text-xs md:text-sm tracking-[0.08em] text-[#39481f]/60 leading-relaxed mb-8">
                  EACH PRODUCT IS PART OF A STRUCTURED SEQUENCE DESIGNED TO GUIDE THE USER THROUGH A COMPLETE RECOVERY CYCLE. FROM CALMING THE MIND TO RESTORING BALANCE.
                </p>

                {/* Steps */}
                <div className="space-y-3 mb-8">
                  {[
                    { step: 'Step 1', label: 'Reset the Mind' },
                    { step: 'Step 2', label: 'Restore the Body' },
                    { step: 'Step 3', label: 'Release Tension' },
                    { step: 'Step 4', label: 'Return to Balance' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-4">
                      <span className="text-sm italic text-[#39481f]/50 w-14">{item.step}</span>
                      <span className="text-base tracking-[0.05em] text-[#39481f]">{item.label}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs md:text-sm tracking-[0.08em] text-[#39481f]/60 leading-relaxed">
                  THIS SYSTEM ALLOWS LUNORA TO MOVE BEYOND INDIVIDUAL PRODUCTS AND FUNCTION AS A COHESIVE RITUAL EXPERIENCE.
                </p>
              </div>
            </AnimatedSection>

            {/* Right - Two images stacked, top-aligned with Ritual System */}
            <AnimatedSection delay={0.2}>
              <div className="flex flex-col justify-start h-full space-y-4 items-center">
                <div className="overflow-hidden w-3/4">
                  <img src={lunoraProductsLight} alt="Lunora products" className="w-full object-cover" />
                </div>
                <div className="overflow-hidden w-3/4">
                  <img src={lunoraInfiniteCycle} alt="Infinite recovery cycle" className="w-full object-contain" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Divider */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24">
          <div className="border-t border-[#39481f]/10" />
        </div>

        {/* Packaging Language */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24">
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
              {/* Left - text */}
              <div>
                <span className="inline-block px-4 py-1.5 border border-primary rounded-full text-xs md:text-sm tracking-[0.15em] text-black mb-8">
                  PACKAGING LANGUAGE
                </span>
                <p className="text-xs md:text-sm tracking-[0.08em] text-[#39481f]/60 leading-relaxed mb-4">
                  WE DEVELOPED A STRUCTURED PACKAGING SYSTEM FOR LUNORA TO ENSURE CONSISTENCY ACROSS DIFFERENT PRODUCT SERIES WHILE ALLOWING FOR FUTURE SCALABILITY.
                </p>
                <p className="text-xs md:text-sm tracking-[0.08em] text-[#39481f]/60 leading-relaxed mb-4">
                  THE SYSTEM IS BUILT ON A CLEAR SET OF RULES:
                </p>
                <ul className="space-y-1.5 mb-6">
                  <li className="text-xs md:text-sm tracking-[0.08em] text-[#39481f]/60 leading-relaxed flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-[#39481f]/40 rounded-full flex-shrink-0" />
                    STEP-BASED HIERARCHY (STEP 01–04) TO GUIDE THE RECOVERY SEQUENCE
                  </li>
                  <li className="text-xs md:text-sm tracking-[0.08em] text-[#39481f]/60 leading-relaxed flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-[#39481f]/40 rounded-full flex-shrink-0" />
                    FUNCTIONAL NAMING SYSTEM TO MAINTAIN CLARITY ACROSS PRODUCTS
                  </li>
                  <li className="text-xs md:text-sm tracking-[0.08em] text-[#39481f]/60 leading-relaxed flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-[#39481f]/40 rounded-full flex-shrink-0" />
                    MINIMAL TYPOGRAPHIC LAYOUT A CALM AND CONTROLLED VISUAL LANGUAGE
                  </li>
                  <li className="text-xs md:text-sm tracking-[0.08em] text-[#39481f]/60 leading-relaxed flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-[#39481f]/40 rounded-full flex-shrink-0" />
                    MATERIAL CONTRAST BETWEEN OUTER PACKAGING AND INNER PRODUCT TO CREATE A LAYERED EXPERIENCE
                  </li>
                </ul>
                <p className="text-xs md:text-sm tracking-[0.08em] text-[#39481f]/60 leading-relaxed">
                  BY DEFINING THESE PRINCIPLES, WE ENSURED THAT EVERY PRODUCT REMAINS VISUALLY CONSISTENT WHILE ALLOWING THE BRAND TO EXPAND INTO NEW CATEGORIES WITHOUT LOSING ITS IDENTITY.
                </p>
              </div>

              {/* Right - packaging carousel with side arrows */}
              <div className="flex items-center justify-center gap-2 h-full">
                <button
                  onClick={prevPackaging}
                  aria-label="Previous packaging"
                  className="w-10 h-10 flex items-center justify-center text-[#39481f]/60 hover:text-[#39481f] transition-colors flex-shrink-0"
                >
                  <ChevronLeft className="w-6 h-6" strokeWidth={1.25} />
                </button>
                <div className="flex-1 flex items-center justify-center max-h-full">
                  <img
                    src={packagingImages[packagingIndex]}
                    alt="Lunora packaging"
                    className="w-full h-auto max-h-[560px] object-contain scale-110"
                  />
                </div>
                <button
                  onClick={nextPackaging}
                  aria-label="Next packaging"
                  className="w-10 h-10 flex items-center justify-center text-[#39481f]/60 hover:text-[#39481f] transition-colors flex-shrink-0"
                >
                  <ChevronRight className="w-6 h-6" strokeWidth={1.25} />
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Content Structure */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24">
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
              {/* Left - smaller phone mockup */}
              <div className="col-span-12 md:col-span-3 flex">
                <img src={lunoraInstagram} alt="Lunora Instagram" className="w-full max-w-[260px] object-contain self-end" />
              </div>

              {/* Right - pill aligned to bottom of image */}
              <div className="col-span-12 md:col-span-9 flex items-end">
                <span className="inline-block px-8 py-3 border-2 border-primary rounded-full text-base md:text-lg font-bold tracking-[0.15em] text-black">
                  CONTENT STRUCTURE
                </span>
              </div>
            </div>

            {/* Paragraphs spanning full width below */}
            <div className="mt-8 md:mt-10 md:pl-[26%]">
              <p className="text-sm md:text-base tracking-[0.08em] text-[#39481f]/80 leading-relaxed mb-4">
                INSTEAD OF RELYING ON A FIXED SEQUENCE, WE STRUCTURED THE GRID THROUGH THREE DISTINCT CONTENT LAYERS. PROBLEM, SYSTEM, AND EXPERIENCE.
              </p>
              <p className="text-sm md:text-base tracking-[0.08em] text-[#39481f]/80 leading-relaxed mb-4">
                EACH VISUAL IS DESIGNED TO COMMUNICATE A SPECIFIC LAYER, ALLOWING THE GRID TO FUNCTION AS A FLEXIBLE SYSTEM RATHER THAN A LINEAR NARRATIVE.
              </p>
              <p className="text-sm md:text-base tracking-[0.08em] text-[#39481f]/80 leading-relaxed">
                THIS ENSURES THAT REGARDLESS OF ENTRY POINT, THE VIEWER CAN IMMEDIATELY GRASP THE BRAND'S PERSPECTIVE WHILE GRADUALLY DISCOVERING ITS LOGIC AND APPLICATION.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Divider */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24">
          <div className="border-t border-[#39481f]/10" />
        </div>

        {/* Product Experience */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24">
          <AnimatedSection delay={0.1}>
            <span className="inline-block px-4 py-1.5 border border-primary rounded-full text-xs md:text-sm tracking-[0.15em] text-black mb-10">
              PRODUCT EXPERIENCE
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { step: 'Step 1', label: 'Reset the Mind', img: lunoraStep1 },
                { step: 'Step 2', label: 'Restore the Body', img: lunoraStep2 },
                { step: 'Step 3', label: 'Release Tension', img: lunoraStep3 },
                { step: 'Step 4', label: 'Return to Balance', img: lunoraStep4 },
              ].map((item) => (
                <div key={item.step}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm italic text-[#39481f]/50">{item.step}</span>
                    <span className="text-xs md:text-sm tracking-[0.06em] text-[#39481f]">{item.label}</span>
                  </div>
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-xs md:text-sm tracking-[0.08em] text-[#39481f]/60 leading-relaxed text-center mt-8 max-w-2xl mx-auto">
              DESIGNED AS A CONTINUOUS RITUAL, EACH STEP GUIDES THE USER FROM OVERSTIMULATION TO REST, ENCOURAGING A SLOWER AND MORE INTENTIONAL RHYTHM OF LIVING.
            </p>
          </AnimatedSection>
        </div>

        {/* Series of Inner Reset - Footer */}
        <div className="container px-6 md:px-12 mt-6 md:mt-8">
          <AnimatedSection delay={0.1}>
            <div className="text-center py-4">
              <p className="text-base italic tracking-[0.08em] text-[#39481f]/60 mb-2">Series of Inner Reset</p>
              <p className="text-xl italic tracking-[0.06em] text-[#39481f]/80">Recovery is infinite.</p>
            </div>
          </AnimatedSection>
        </div>

        {/* More Concept Work */}
        <div className="container px-6 md:px-12 pb-24">
          <AnimatedSection delay={0.1}>
            <div className="text-center">
              <Link
                to="/about#concepts"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block px-6 py-2 border border-primary rounded-full text-sm tracking-[0.15em] text-black hover:bg-[#39481f]/5 transition-colors"
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

export default ConceptLunora;
