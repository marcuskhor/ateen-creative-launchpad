import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "g4ogkbfc",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

type SanityImageSource = Parameters<typeof builder.image>[0];

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export const CATEGORIES = [
  { value: "all", label: "ALL" },
  { value: "system", label: "SYSTEM" },
  { value: "branding", label: "BRANDING" },
  { value: "strategy", label: "STRATEGY" },
  { value: "implement", label: "IMPLEMENT" },
] as const;

export type CategoryValue = (typeof CATEGORIES)[number]["value"];

export type InsightCard = {
  _id: string;
  title: string;
  slug: { current: string };
  subtitle?: string;
  category: string;
  publishedAt: string;
};

export type InsightPost = InsightCard & {
  heroIntro?: string;
  sections?: Array<
    | { _type: "textSection"; _key: string; heading?: string; body?: unknown[] }
    | { _type: "imageSection"; _key: string; image?: unknown; caption?: string }
  >;
  faqs?: Array<{ _key: string; question: string; answer: unknown[] }>;
  related?: Array<{ _id: string; title: string; slug: { current: string } }>;
};

export const POSTS_LIST_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id, title, slug, subtitle, category, publishedAt
}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id, title, slug, subtitle, category, publishedAt, heroIntro, sections, faqs,
  "related": related[]->{ _id, title, slug }
}`;