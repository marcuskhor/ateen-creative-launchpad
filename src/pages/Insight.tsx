import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { sanityClient, POSTS_LIST_QUERY, CATEGORIES, type InsightCard } from '@/lib/sanity';

const formatDate = (iso: string) => {
  try {
    const d = new Date(iso);
    return `PUBLISHED ${d.toLocaleString('en-US', { month: 'long', year: 'numeric' }).toUpperCase()}`;
  } catch {
    return '';
  }
};

const Insight = () => {
  const [active, setActive] = useState<string>('all');
  const { data: posts, isLoading } = useQuery({
    queryKey: ['insight-posts'],
    queryFn: () => sanityClient.fetch<InsightCard[]>(POSTS_LIST_QUERY),
  });

  const filtered = (posts ?? []).filter((p) => active === 'all' || p.category === active);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-24">
        <div className="container px-6 md:px-12 max-w-6xl">
          {/* Hero */}
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight">A COLLECTION OF</h1>
            <p className="mt-3 text-sm md:text-base tracking-[0.2em] text-muted-foreground font-light">
              THOUGHTS, FRAMEWORK, AND BRAND OBSERVATION.
            </p>
          </AnimatedSection>

          {/* Category filter */}
          <AnimatedSection delay={0.1}>
            <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 text-xs md:text-sm tracking-[0.2em]">
              <span className="text-primary font-medium">CATEGORY</span>
              {CATEGORIES.map((c) => {
                const isActive = active === c.value;
                return (
                  <button
                    key={c.value}
                    onClick={() => setActive(c.value)}
                    className={`transition-colors pb-1 border-b ${
                      isActive
                        ? 'text-foreground border-foreground'
                        : 'text-muted-foreground border-transparent hover:text-foreground'
                    }`}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Cards */}
          <div className="mt-12 space-y-6">
            {isLoading && (
              <div className="text-muted-foreground text-sm tracking-[0.2em]">LOADING…</div>
            )}
            {!isLoading && filtered.length === 0 && (
              <div className="text-muted-foreground text-sm tracking-[0.2em] py-12">
                NO INSIGHT YET — POSTS PUBLISHED IN THE STUDIO WILL APPEAR HERE.
              </div>
            )}
            {filtered.map((post, i) => (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={`/insight/${post.slug.current}`}
                  className="group block border border-border/60 rounded-sm p-6 md:p-10 hover:border-primary/60 transition-colors"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] md:text-xs tracking-[0.25em] text-muted-foreground">
                        ATEEN THOUGHTS
                      </div>
                      <h2 className="mt-6 text-2xl md:text-4xl font-medium text-primary leading-tight max-w-2xl">
                        {post.title.toUpperCase()}
                      </h2>
                      {post.subtitle && (
                        <p className="mt-4 text-xs md:text-sm tracking-wide text-muted-foreground max-w-xl leading-relaxed">
                          {post.subtitle}
                        </p>
                      )}
                    </div>
                    <div className="shrink-0 flex items-center gap-2 text-sm md:text-base tracking-[0.2em] text-primary">
                      READ
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                  <div className="mt-10 flex items-center justify-between text-[10px] md:text-xs tracking-[0.25em] text-muted-foreground">
                    <span>{post.category?.toUpperCase()}</span>
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length > 0 && (
            <div className="mt-16 text-center">
              <button className="text-sm tracking-[0.25em] font-medium border-b border-foreground pb-1">
                VIEW ALL INSIGHT
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Insight;