import { getSitemapPages } from "@/entities/page";
import { getSitemapUrlSetResponse, SitemapUrlDto } from "@/shared/lib/sitemap";

export const revalidate = 60;

export async function GET(request: Request) {
  const date = new Date();

  const slugs = await getSitemapPages();

  const urls: SitemapUrlDto[] = slugs.map(({ slug }) => {
    return {
      uri: `page/${slug}`,
      date,
      changefreq: "daily",
      priority: 0.7,
    };
  });

  return getSitemapUrlSetResponse([
    ...urls,
    {
      uri: `page/electrical-simulator`,
      date,
      changefreq: "daily",
      priority: 0.7,
    },
    {
      uri: `page/html-editor`,
      date,
      changefreq: "daily",
      priority: 0.7,
    },
  ]);
}
