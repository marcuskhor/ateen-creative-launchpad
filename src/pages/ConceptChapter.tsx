import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Link } from 'react-router-dom';

import chapterLogo01 from '@/assets/chapter-logo-01.png';
import chapterLogo02 from '@/assets/chapter-logo-02.png';
import chapterLogo03 from '@/assets/chapter-logo-03.png';
import chapterLogo04 from '@/assets/chapter-logo-04.png';
import chapterBottle from '@/assets/chapter-bottle.jpg';
import chapterHandLight from '@/assets/chapter-hand-light.png';
import chapterInstagram from '@/assets/chapter-instagram.png';
import chapterHands from '@/assets/chapter-hands.jpg';
import chapterFabric from '@/assets/chapter-fabric.jpg';
import chapterMirror from '@/assets/chapter-mirror.jpg';
import chapterWebsite1 from '@/assets/chapter-website-1.jpg';
import chapterWebsite2 from '@/assets/chapter-website-2.jpg';
import chapterLaptop from '@/assets/chapter-laptop.jpg';

const ConceptChapter = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-0">

        {/* Nav Pills */}
        <div className="container px-6 md:px-12 pt-8">
          <AnimatedSection>
            <div className="flex flex-wrap gap-3 mb-12">
              {['VALUE DEFINED', 'BRAND POSITIONING', 'BRAND PRINCIPLES'].map((pill) => (
                <span
                  key={pill}
                  className="px-4 py-1.5 border border-primary rounded-full text-[10px] md:text-xs tracking-[0.15em] text-primary"
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
            <p className="text-sm md:text-base tracking-[0.12em] text-foreground/70 mb-2">
              A RATIONAL, MODERN PERFUME BRAND.
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.02em] text-foreground mb-2" style={{ fontFamily: 'serif' }}>
              ĆHAPTER
            </h1>
            <p className="text-[10px] md:text-xs tracking-[0.15em] text-foreground/50">
              CONCEPT BY ATEEN
            </p>
          </AnimatedSection>
        </div>

        {/* Hero Images + Value Defined + Positioning */}
        <div className="container px-6 md:px-12 mt-12 md:mt-16">
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
              {/* Left image - hand in light */}
              <div className="aspect-[3/4] overflow-hidden">
                <img src={chapterHandLight} alt="Hand reaching into light" className="w-full h-full object-cover" />
              </div>
              {/* Center image - bottle */}
              <div className="aspect-[3/4] overflow-hidden">
                <img src={chapterBottle} alt="Chapter Eau perfume bottle" className="w-full h-full object-cover" />
              </div>
              {/* Right text */}
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold tracking-[0.08em] text-foreground mb-3">
                  VALUE DEFINED
                </h2>
                <p className="text-xs md:text-sm tracking-[0.1em] text-foreground/60 mb-8">
                  THE SCENT IS THE CHAPTER YOU'RE IN.
                </p>
                <h3 className="text-xl md:text-2xl font-bold tracking-[0.08em] text-foreground mb-4">
                  POSITIONING
                </h3>
                <p className="text-[10px] md:text-xs tracking-[0.08em] text-foreground/60 leading-relaxed mb-3">
                  ATEEN POSITIONED CHAPTER AS A RATIONAL MODERN PERFUME BRAND BUILT AROUND THE IDEA OF LIFE CHAPTERS.
                </p>
                <p className="text-[10px] md:text-xs tracking-[0.08em] text-foreground/60 leading-relaxed">
                  INSTEAD OF DEFINING FRAGRANCE BY GENDER OR FIXED IDENTITY LABELS, THE CONCEPT EXPLORES WHERE SOMEONE IS IN LIFE, AND TRANSLATES THAT MOMENT INTO SCENT.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Principles */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.06em] text-foreground mb-6">
              PRINCIPLES
            </h2>
            <div className="space-y-1 mb-4">
              <p className="text-xs md:text-sm tracking-[0.1em] text-foreground/80 font-semibold">
                CHAPTER OVER IDENTITY
              </p>
              <p className="text-xs md:text-sm tracking-[0.1em] text-foreground/80 font-semibold">
                EMOTION OVER CATEGORY
              </p>
              <p className="text-xs md:text-sm tracking-[0.1em] text-foreground/80 font-semibold">
                MOMENT OVER PERSONALITY
              </p>
            </div>
            <p className="text-[10px] md:text-xs tracking-[0.08em] text-foreground/50 leading-relaxed max-w-xl">
              THESE PRINCIPLES GUIDED THE DEVELOPMENT OF CHAPTER'S BRAND SYSTEM, VISUAL LANGUAGE, AND NARRATIVE STRUCTURE.
            </p>
          </AnimatedSection>
        </div>

        {/* Divider */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24">
          <div className="border-t border-foreground/10" />
        </div>

        {/* Logo System + Website Experience */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Logo System - Left */}
            <AnimatedSection delay={0.1}>
              <span className="inline-block px-4 py-1.5 border border-primary rounded-full text-[10px] md:text-xs tracking-[0.15em] text-primary mb-8">
                LOGO SYSTEM
              </span>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="aspect-square bg-foreground rounded-full overflow-hidden flex items-center justify-center p-4">
                  <img src={chapterLogo03} alt="Chapter logo dark variant 1" className="w-full h-full object-contain" />
                </div>
                <div className="aspect-square bg-foreground rounded-full overflow-hidden flex items-center justify-center p-4">
                  <img src={chapterLogo04} alt="Chapter logo dark variant 2" className="w-full h-full object-contain" />
                </div>
              </div>
              <p className="text-[10px] md:text-xs tracking-[0.08em] text-foreground/60 leading-relaxed mb-3">
                ATEEN DEVELOPED A MINIMAL LOGO SYSTEM INSPIRED BY THE SILHOUETTE OF A PERFUME BOTTLE.
              </p>
              <p className="text-[10px] md:text-xs tracking-[0.08em] text-foreground/60 leading-relaxed">
                THE CIRCULAR STRUCTURE REFLECTS THE QUIET TRANSITION BETWEEN LIFE CHAPTERS, WHILE MAINTAINING A RESTRAINED AND TIMELESS VISUAL LANGUAGE.
              </p>
            </AnimatedSection>

            {/* Website Experience - Right */}
            <AnimatedSection delay={0.2}>
              <span className="inline-block px-4 py-1.5 border border-primary rounded-full text-[10px] md:text-xs tracking-[0.15em] text-primary mb-8">
                WEBSITE EXPERIENCE
              </span>
              <p className="text-[10px] md:text-xs tracking-[0.08em] text-foreground/60 leading-relaxed mb-3">
                ATEEN STRUCTURED THE WEBSITE TO GUIDE VISITORS THROUGH THE BRAND'S NARRATIVE RATHER THAN TRADITIONAL PRODUCT BROWSING.
              </p>
              <p className="text-[10px] md:text-xs tracking-[0.08em] text-foreground/60 leading-relaxed mb-8">
                INSTEAD OF PRESENTING FRAGRANCES AS PRODUCTS, THE SITE INTRODUCES THEM AS CHAPTERS, EACH REPRESENTING A MOMENT IN LIFE.
              </p>
              <div className="overflow-hidden rounded-sm">
                <img src={chapterLaptop} alt="Chapter website on laptop" className="w-full object-cover" />
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Website Screenshots */}
        <div className="container px-6 md:px-12 mt-8">
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-sm">
                <img src={chapterWebsite1} alt="Chapter website homepage" className="w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-sm">
                <img src={chapterWebsite2} alt="Chapter website inner page" className="w-full object-cover" />
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Divider */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24">
          <div className="border-t border-foreground/10" />
        </div>

        {/* Content System */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24">
          <AnimatedSection delay={0.1}>
            <span className="inline-block px-4 py-1.5 border border-primary rounded-full text-[10px] md:text-xs tracking-[0.15em] text-primary mb-8">
              CONTENT SYSTEM
            </span>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Phone mockup left */}
            <AnimatedSection delay={0.15}>
              <div className="max-w-[320px]">
                <img src={chapterInstagram} alt="Chapter Instagram content system" className="w-full object-contain" />
              </div>
            </AnimatedSection>

            {/* Text right */}
            <AnimatedSection delay={0.25}>
              <div className="flex flex-col justify-end h-full">
                <p className="text-[10px] md:text-xs tracking-[0.08em] text-foreground/60 leading-relaxed mb-3">
                  SOCIAL MEDIA HAS BECOME ONE OF THE MOST IMPORTANT SPACES FOR A BRAND TO EXIST.
                </p>
                <p className="text-[10px] md:text-xs tracking-[0.08em] text-foreground/60 leading-relaxed">
                  INSTEAD OF RELYING ONLY ON PERFORMANCE DATA, ATEEN DESIGNED A CONTENT SYSTEM THAT REFLECTS THE BRAND'S IDENTITY, VISUAL LANGUAGE, AND NARRATIVE STRUCTURE.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Divider */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24">
          <div className="border-t border-foreground/10" />
        </div>

        {/* Content Production */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1.5 border border-primary rounded-full text-[10px] md:text-xs tracking-[0.15em] text-primary mb-6">
                CONTENT PRODUCTION
              </span>
              <p className="text-[10px] md:text-xs tracking-[0.08em] text-foreground/60 leading-relaxed max-w-xl mx-auto mb-2">
                ATEEN PRODUCED A SERIES OF PHOTOGRAPHIC ASSETS THAT REFLECT THE CALM AND INTROSPECTIVE TONE OF CHAPTER.
              </p>
              <p className="text-[10px] md:text-xs tracking-[0.08em] text-foreground/60 leading-relaxed max-w-xl mx-auto">
                THE IMAGERY FOCUSES ON QUIET MOMENTS, SUBTLE GESTURES, AND MINIMAL COMPOSITIONS, REINFORCING THE BRAND NARRATIVE AROUND LIFE CHAPTERS.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={chapterHands} alt="Chapter content - hands passing bottle" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] overflow-hidden">
                <img src={chapterFabric} alt="Chapter content - bottle in fabric" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] overflow-hidden">
                <img src={chapterMirror} alt="Chapter content - bottle with mirror" className="w-full h-full object-cover" />
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* More Concept Work */}
        <div className="container px-6 md:px-12 mt-16 md:mt-24 pb-24">
          <AnimatedSection delay={0.1}>
            <div className="text-center">
              <Link
                to="/about#concepts"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block px-6 py-2 border border-primary rounded-full text-xs tracking-[0.15em] text-primary hover:bg-primary/10 transition-colors"
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

export default ConceptChapter;
