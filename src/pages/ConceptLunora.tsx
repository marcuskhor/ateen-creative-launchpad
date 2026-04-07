import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import lunoraWordmark from '@/assets/lunora-wordmark.png';
import lunoraProductsHero from '@/assets/lunora-products-hero.jpg';
import lunoraProductsLight from '@/assets/lunora-products-light.jpg';
import lunoraInfiniteCycle from '@/assets/lunora-infinite-cycle.png';
import lunoraInstagram from '@/assets/lunora-instagram.jpg';
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
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="pt-24 pb-0">

        {/* Nav Pills */}
        <div className="container px-6 md:px-12 pt-8">
          <AnimatedSection>
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              {['BRAND CORE', 'BRAND DIRECTION'].map((pill) => (
                <span
                  key={pill}
                  className="px-5 py-1.5 border border-primary rounded-full text-[10px] md:text-xs tracking-[0.15em] text-black bg-primary/20"
                >
                  {pill}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Hero: Lunxra wordmark + subtitle */}
        <div className="container px-6 md:px-12">
          <AnimatedSection delay={0.1}>
            <div className="text-center">
              <img src={lunoraWordmark} alt="lunxra" className="h-20 md:h-28 lg:h-36 mx-auto mb-4 object-contain" />
              <p className="text-xs md:text-sm tracking-[0.2em] text-black/70">
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
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-[0.06em] text-black mb-6">
                  BRAND DIRECTION
                </h2>
                <p className="text-[10px] md:text-xs tracking-[0.08em] text-black/60 leading-relaxed mb-4">
                  WE POSITIONED LUNORA AS A RITUAL-BASED WELLNESS BRAND FOCUSED ON RESTORING BALANCE FOR THE OVERSTIMULATED MODERN MIND.
                </p>
                <p className="text-[10px] md:text-xs tracking-[0.08em] text-black/60 leading-relaxed">
                  WHILE MANY WELLNESS BRANDS FOCUS PRIMARILY ON EXTERNAL RESULTS — APPEARANCE, FITNESS, OR PERFORMANCE. LUNORA CENTERS ON INNER RECOVERY. THE BRAND ENCOURAGES A SLOWER RHYTHM OF LIVING THROUGH SMALL DAILY RITUALS DESIGNED TO CALM THE MIND, RELEASE THE TENSION, AND GUIDE THE BODY BACK TO ITS NATURAL STATE OF BALANCE.
                </p>
              </div>
              {/* Brand Core */}
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-[0.06em] text-black mb-6">
                  BRAND CORE
                </h2>
                <p className="text-sm md:text-base tracking-[0.08em] text-black/80 leading-relaxed mb-8">
                  RECOVERY BEGINS WHEN THE MIND RETURNS TO BALANCE.
                </p>
                {/* Product hero image */}
                <div className="overflow-hidden">
                  <img src={lunoraProductsLight} alt="Lunora products" className="w-full object-cover" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Ritual System + Infinite Cycle */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Ritual System - Left */}
            <AnimatedSection delay={0.1}>
              <div>
                <span className="inline-block px-4 py-1.5 border border-primary rounded-full text-[10px] md:text-xs tracking-[0.15em] text-black bg-primary/20 mb-8">
                  RITUAL SYSTEM
                </span>
                <p className="text-[10px] md:text-xs tracking-[0.08em] text-black/60 leading-relaxed mb-4">
                  TO TRANSLATE THE IDEA OF RECOVERY INTO A TANGIBLE EXPERIENCE, ATEEN DEVELOPED A STEP-BASED RITUAL SYSTEM.
                </p>
                <p className="text-[10px] md:text-xs tracking-[0.08em] text-black/60 leading-relaxed mb-8">
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
                      <span className="text-xs italic text-black/50 w-12">{item.step}</span>
                      <span className="text-sm tracking-[0.05em] text-black">{item.label}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[10px] md:text-xs tracking-[0.08em] text-black/60 leading-relaxed">
                  THIS SYSTEM ALLOWS LUNORA TO MOVE BEYOND INDIVIDUAL PRODUCTS AND FUNCTION AS A COHESIVE RITUAL EXPERIENCE.
                </p>
              </div>
            </AnimatedSection>

            {/* Right - Product image + Infinite cycle */}
            <div className="space-y-8">
              <AnimatedSection delay={0.2}>
                <div className="overflow-hidden">
                  <img src={lunoraProductsHero} alt="Lunora all products" className="w-full object-cover" />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className="bg-[hsl(50,20%,90%)] p-6 md:p-8">
                  <img src={lunoraInfiniteCycle} alt="Infinite recovery cycle" className="w-full object-contain" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24">
          <div className="border-t border-black/10" />
        </div>

        {/* Packaging Language */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24">
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Left - text */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-[0.06em] text-black mb-6 underline underline-offset-4 decoration-2">
                  PACKAGING LANGUAGE
                </h2>
                <p className="text-[10px] md:text-xs tracking-[0.08em] text-black/60 leading-relaxed mb-4">
                  WE DEVELOPED A STRUCTURED PACKAGING SYSTEM FOR LUNORA TO ENSURE CONSISTENCY ACROSS DIFFERENT PRODUCT SERIES WHILE ALLOWING FOR FUTURE SCALABILITY.
                </p>
                <p className="text-[10px] md:text-xs tracking-[0.08em] text-black/60 leading-relaxed mb-4">
                  THE SYSTEM IS BUILT ON A CLEAR SET OF RULES:
                </p>
                <ul className="space-y-1 mb-6">
                  <li className="text-[10px] md:text-xs tracking-[0.08em] text-black/60 leading-relaxed flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 bg-black/40 rounded-full flex-shrink-0" />
                    STEP-BASED HIERARCHY (STEP 01–04) TO GUIDE THE RECOVERY SEQUENCE
                  </li>
                  <li className="text-[10px] md:text-xs tracking-[0.08em] text-black/60 leading-relaxed flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 bg-black/40 rounded-full flex-shrink-0" />
                    FUNCTIONAL NAMING SYSTEM TO MAINTAIN CLARITY ACROSS PRODUCTS
                  </li>
                  <li className="text-[10px] md:text-xs tracking-[0.08em] text-black/60 leading-relaxed flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 bg-black/40 rounded-full flex-shrink-0" />
                    MINIMAL TYPOGRAPHIC LAYOUT A CALM AND CONTROLLED VISUAL LANGUAGE
                  </li>
                  <li className="text-[10px] md:text-xs tracking-[0.08em] text-black/60 leading-relaxed flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 bg-black/40 rounded-full flex-shrink-0" />
                    MATERIAL CONTRAST BETWEEN OUTER PACKAGING AND INNER PRODUCT TO CREATE A LAYERED EXPERIENCE
                  </li>
                </ul>
                <p className="text-[10px] md:text-xs tracking-[0.08em] text-black/60 leading-relaxed">
                  BY DEFINING THESE PRINCIPLES, WE ENSURED THAT EVERY PRODUCT REMAINS VISUALLY CONSISTENT WHILE ALLOWING THE BRAND TO EXPAND INTO NEW CATEGORIES WITHOUT LOSING ITS IDENTITY.
                </p>
              </div>

              {/* Right - packaging carousel */}
              <div className="flex flex-col items-center">
                <div className="relative w-full max-w-[400px]">
                  <img
                    src={packagingImages[packagingIndex]}
                    alt="Lunora packaging"
                    className="w-full object-contain"
                  />
                </div>
                <div className="flex items-center gap-6 mt-6">
                  <button
                    onClick={prevPackaging}
                    className="w-10 h-10 border border-black/20 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4 text-black" />
                  </button>
                  <button
                    onClick={nextPackaging}
                    className="w-10 h-10 border border-black/20 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-black" />
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Content Structure */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24">
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Left - phone mockup */}
              <div className="max-w-[300px]">
                <img src={lunoraInstagram} alt="Lunora Instagram" className="w-full object-contain rounded-2xl" />
              </div>

              {/* Right - text */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-[0.06em] text-black mb-6 underline underline-offset-4 decoration-2">
                  CONTENT STRUCTURE
                </h2>
                <p className="text-[10px] md:text-xs tracking-[0.08em] text-black/60 leading-relaxed mb-4">
                  INSTEAD OF RELYING ON A FIXED SEQUENCE, WE STRUCTURED THE GRID THROUGH THREE DISTINCT CONTENT LAYERS. PROBLEM, SYSTEM, AND EXPERIENCE.
                </p>
                <p className="text-[10px] md:text-xs tracking-[0.08em] text-black/60 leading-relaxed mb-4">
                  EACH VISUAL IS DESIGNED TO COMMUNICATE A SPECIFIC LAYER, ALLOWING THE GRID TO FUNCTION AS A FLEXIBLE SYSTEM RATHER THAN A LINEAR NARRATIVE.
                </p>
                <p className="text-[10px] md:text-xs tracking-[0.08em] text-black/60 leading-relaxed">
                  THIS ENSURES THAT REGARDLESS OF ENTRY POINT, THE VIEWER CAN IMMEDIATELY GRASP THE BRAND'S PERSPECTIVE WHILE GRADUALLY DISCOVERING ITS LOGIC AND APPLICATION.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Divider */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24">
          <div className="border-t border-black/10" />
        </div>

        {/* Product Experience */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24">
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-bold tracking-[0.06em] text-black mb-10 underline underline-offset-4 decoration-2">
              PRODUCT EXPERIENCE
            </h2>
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
                    <span className="text-xs italic text-black/50">{item.step}</span>
                    <span className="text-[10px] md:text-xs tracking-[0.06em] text-black">{item.label}</span>
                  </div>
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-[10px] md:text-xs tracking-[0.08em] text-black/60 leading-relaxed text-center mt-8 max-w-2xl mx-auto">
              DESIGNED AS A CONTINUOUS RITUAL, EACH STEP GUIDES THE USER FROM OVERSTIMULATION TO REST, ENCOURAGING A SLOWER AND MORE INTENTIONAL RHYTHM OF LIVING.
            </p>
          </AnimatedSection>
        </div>

        {/* Series of Inner Reset - Footer */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24">
          <AnimatedSection delay={0.1}>
            <div className="text-center py-12">
              <p className="text-sm italic tracking-[0.08em] text-black/60 mb-2">Series of Inner Reset</p>
              <p className="text-lg italic tracking-[0.06em] text-black/80">Recovery is infinite.</p>
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
                className="inline-block px-6 py-2 border border-primary rounded-full text-xs tracking-[0.15em] text-black hover:bg-primary/10 transition-colors"
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
