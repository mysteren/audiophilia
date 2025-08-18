// app/server-sitemap-index.xml/route.ts
import { getProductsCount } from "@/entities/product";
import { SITEMAP_LIMIT } from "@/shared/config";
import { getSitemapIndexResponse } from "@/shared/lib/sitemap";

export const revalidate = 60

export async function GET() {
  // Method to source urls from cms

  const date = new Date();

  const productsCount = await getProductsCount();

  const productsPartsCount = Math.ceil(productsCount / SITEMAP_LIMIT);

  const productsUrls = Array.from(Array(productsPartsCount).keys()).map(
    (index) => `product/${index + 1}`
  );

  return getSitemapIndexResponse(
    ["category", "article", "page", ...productsUrls].map((uri) => {
      return { uri, date };
    })
  );
}
