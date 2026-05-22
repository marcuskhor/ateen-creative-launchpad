import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { sanityClient, urlFor, POST_BY_SLUG_QUERY, type InsightPost } from '@/lib/sanity';

const InsightPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading } = useQuery({
    queryKey: ['insight-post', slug],
    queryFn: () => sanityClient.fetch<InsightPost | null>(POST_BY_SLUG_QUERY, { slug }),
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <div className="pt-40 container px-6 text-muted-foreground tracking-[0.2em] text-sm">
          LOADING…
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <div className="pt-40 container px-6">
          <p className="text-muted-foreground tracking-[0.2em] text-sm">POST NOT FOUND.</p>
          <Link to="/insight" className="text-primary mt-4 inline-block">← BACK TO INSIGHT</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-24">
        <article className="container px-6 md:px-12 max-w-4xl">
          {/* Title */}
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-medium text-primary leading-[1.05] tracking-tight">
              {post.title.toUpperCase()}
            </h1>
            {post.heroIntro && (
              <p className="mt-6 text-sm md:text-base text-muted-foreground max-w-2xl tracking-wide leading-relaxed">
                {post.heroIntro}
              </p>
            )}
          </AnimatedSection>

          {/* Sections */}
          <div className="mt-20 space-y-16">
            {post.sections?.map((section) => {
              if (section._type === 'textSection') {
                return (
                  <AnimatedSection key={section._key}>
                    {section.heading && (
                      <h2 className="text-xl md:text-2xl font-medium tracking-wide mb-5">
                        {section.heading.toUpperCase()}
                      </h2>
                    )}
                    <div className="prose-insight max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed space-y-4">
                      {section.body && (
                        <PortableText
                          value={section.body as never}
                          components={{
                            block: {
                              normal: ({ children }) => <p>{children}</p>,
                            },
                          }}
                        />
                      )}
                    </div>
                  </AnimatedSection>
                );
              }
              if (section._type === 'imageSection' && section.image) {
                return (
                  <AnimatedSection key={section._key}>
                    <figure>
                      <img
                        src={urlFor(section.image).width(1400).auto('format').url()}
                        alt={section.caption ?? ''}
                        className="w-full max-w-2xl rounded-sm"
                      />
                      {section.caption && (
                        <figcaption className="mt-3 text-[10px] md:text-xs tracking-[0.2em] text-muted-foreground">
                          {section.caption.toUpperCase()}
                        </figcaption>
                      )}
                    </figure>
                  </AnimatedSection>
                );
              }
              return null;
            })}
          </div>

          {/* FAQs */}
          {post.faqs && post.faqs.length > 0 && (
            <AnimatedSection>
              <div className="mt-24 border-t border-primary/40 pt-12">
                <h2 className="text-4xl md:text-5xl font-medium mb-10">FAQs</h2>
                <Accordion type="single" collapsible defaultValue={post.faqs[0]._key}>
                  {post.faqs.map((f) => (
                    <AccordionItem key={f._key} value={f._key} className="border-border/60">
                      <AccordionTrigger className="text-sm md:text-base font-medium tracking-[0.15em] hover:no-underline">
                        {f.question.toUpperCase()}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                        <PortableText value={f.answer as never} />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </AnimatedSection>
          )}

          {/* Related */}
          {post.related && post.related.length > 0 && (
            <AnimatedSection>
              <div className="mt-24 border-t border-primary/40 pt-12">
                <h2 className="text-3xl md:text-4xl font-medium mb-8">RELATED INSIGHT</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {post.related.map((r) => (
                    <Link
                      key={r._id}
                      to={`/insight/${r.slug.current}`}
                      className="group flex items-start justify-between gap-3 text-sm tracking-[0.15em] font-medium hover:text-primary transition-colors"
                    >
                      <span>{r.title.toUpperCase()}</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default InsightPostPage;