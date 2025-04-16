import { getSitemapCategories } from "@/entities/category";
import {
  getSitemapUrlSetResponse,
  SitemapUrlDto
} from "@/shared/lib/sitemap";

export const revalidate = 60

export async function GET(request: Request) {
  const date = new Date();

  const slugs = await getSitemapCategories();

  const urls: SitemapUrlDto[] = slugs.map(({ slug }) => {
    return {
      uri: `category/${slug}`,
      date,
      changefreq: "daily",
      priority: 0.6,
    };
  });

  return getSitemapUrlSetResponse(urls);
}
