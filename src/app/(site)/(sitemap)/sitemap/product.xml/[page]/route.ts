import { getSitemapsProducts } from "@/entities/product";
import { SITEMAP_LIMIT } from "@/shared/config";
import { getSitemapUrlSetResponse, SitemapUrlDto } from "@/shared/lib/sitemap";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ page: string }> }
) {
  const date = new Date();
  const { page } = await params;

  const pageNumber = Number(page.split(".")[0]);
  // const page = 0;

  const items = await getSitemapsProducts(SITEMAP_LIMIT, pageNumber);

  const urls: SitemapUrlDto[] = items.map(({ slug }) => {
    return {
      uri: `product/${slug}`,
      date,
      changefreq: "daily",
      priority: 0.5,
    };
  });

  return getSitemapUrlSetResponse(urls);
}
