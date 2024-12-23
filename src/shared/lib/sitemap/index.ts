import { BASE_URL } from "@/shared/config";
import { cleanXML } from "../xml";

export type Changefreq =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export type SitemapUrlDto = { uri: string; date: Date, changefreq: Changefreq,  priority: number }

function getSitemapIndex(uri: string, date: Date) {
  return `<sitemap>
    <loc>${BASE_URL}/sitemap/${uri}.xml</loc>
    <lastmod>${date.toISOString()}</lastmod>
  </sitemap>`;
}



export function getSitemapIndexResponse(items: { uri: string; date: Date }[]) {
  const data = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${items.map((item) => getSitemapIndex(item.uri, item.date)).join("\n")}
  </sitemapindex>`;

  return new Response(cleanXML(data), {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}

function getSitemapUrl(
  url: string,
  date: Date,
  changefreq: Changefreq,
  priority: number
) {
  return `<url>
    <loc>${BASE_URL}/${url}</loc>
    <lastmod>${date.toISOString()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export function getSitemapUrlSetResponse(items: SitemapUrlDto[]) {
  const data = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${items.map((item) => getSitemapUrl(item.uri, item.date, item.changefreq, item.priority)).join("\n")}
  </urlset>`;

  return new Response(cleanXML(data), {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
