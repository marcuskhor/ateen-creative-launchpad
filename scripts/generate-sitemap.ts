// Auto-generates public/sitemap.xml at build time.
// Pulls insight post slugs from Sanity so every published post is included.
import { writeFileSync } from "fs";
import { resolve } from "path";
import { createClient } from "@sanity/client";

const BASE_URL = "https://ateenworks.com";

const sanity = createClient({
  projectId: "g4ogkbfc",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

interface Entry {
  path: string;
  lastmod?: string;
  changefreq?: string;
  priority?: string;
}

const staticEntries: Entry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/work", changefreq: "monthly", priority: "0.8" },
  { path: "/insight", changefreq: "weekly", priority: "0.8" },
  { path: "/concept/chapter", changefreq: "monthly", priority: "0.6" },
  { path: "/concept/lunora", changefreq: "monthly", priority: "0.6" },
  { path: "/concept/anti-overwork", changefreq: "monthly", priority: "0.6" },
];

async function main() {
  let postEntries: Entry[] = [];
  try {
    const posts = await sanity.fetch<Array<{ slug: { current: string }; _updatedAt: string }>>(
      `*[_type == "post" && defined(slug.current)]{ slug, _updatedAt }`
    );
    postEntries = posts.map((p) => ({
      path: `/insight/${p.slug.current}`,
      lastmod: p._updatedAt?.split("T")[0],
      changefreq: "monthly",
      priority: "0.7",
    }));
  } catch (err) {
    console.warn("Could not fetch posts from Sanity, building sitemap without them:", err);
  }

  const entries = [...staticEntries, ...postEntries];
  const urls = entries
    .map((e) =>
      [
        "  <url>",
        `    <loc>${BASE_URL}${e.path}</loc>`,
        e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
        e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
        e.priority ? `    <priority>${e.priority}</priority>` : null,
        "  </url>",
      ]
        .filter(Boolean)
        .join("\n")
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  writeFileSync(resolve("public/sitemap.xml"), xml);
  console.log(`sitemap.xml written (${entries.length} entries)`);
}

main();
