// app/server-sitemap-index.xml/route.ts
import { getProductsCount } from "@/entities/product";
import { SITEMAP_LIMIT } from "@/shared/config";
import { getSitemapIndexResponse } from "@/shared/lib/sitemap";

export async function GET() {
  // Method to source urls from cms

  const date = new Date();

  const productsCount = await getProductsCount();

  const productsPartsCount = Math.ceil(productsCount / SITEMAP_LIMIT);

  const productsUrls = Array.from(Array(productsPartsCount).keys()).map(
    (index) => `product/${index + 1}`
  );

  return getSitemapIndexResponse(
    ["category", "article", ...productsUrls].map((uri) => {
      return { uri, date };
    })
  );
}
