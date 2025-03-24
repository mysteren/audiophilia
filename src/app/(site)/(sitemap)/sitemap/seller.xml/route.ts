import { getSitemapCategories } from "@/entities/category";
import { getSitemapSellers } from "@/entities/seller";
import { getSitemapUrlSetResponse, SitemapUrlDto } from "@/shared/lib/sitemap";

export async function GET(request: Request) {
  const date = new Date();

  const slugs = await getSitemapSellers();

  const urls: SitemapUrlDto[] = slugs.map(({ slug }) => {
    return {
      uri: `seller/${slug}`,
      date,
      changefreq: "monthly",
      priority: 0.2,
    };
  });

  return getSitemapUrlSetResponse(urls);
}
