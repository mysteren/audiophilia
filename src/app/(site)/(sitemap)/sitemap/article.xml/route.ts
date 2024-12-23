import { getArticles } from "@/entities/article/model";
import {
  getSitemapUrlSetResponse,
  SitemapUrlDto
} from "@/shared/lib/sitemap";


export async function GET(request: Request) {
  const date = new Date();

  const slugs = await getArticles(0, 0);

  const urls: SitemapUrlDto[] = slugs.map(({ slug }) => {
    return {
      uri: `journal/article/${slug}`,
      date,
      changefreq: "daily",
      priority: 0.7,
    };
  });

  return getSitemapUrlSetResponse(urls);
}