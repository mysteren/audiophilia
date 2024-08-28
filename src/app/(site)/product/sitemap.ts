import { BASE_URL, SITEMAP_LIMIT } from "@/shared/config";
import { getProducts, getProductsCount } from "@/services/sitemap";
import { MetadataRoute } from "next";

export async function generateSitemaps() {
  const productsCount = await getProductsCount();

  const productsPartsCount = Math.ceil(productsCount / SITEMAP_LIMIT);

  const productsUrls = Array.from(Array(productsPartsCount).keys()).map(
    (id) => {
      return { id };
    }
  );

  // Fetch the total number of products and calculate the number of sitemaps needed
  return productsUrls;
}

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date().toISOString();

  const slugs = await getProducts(SITEMAP_LIMIT, id);

  return slugs.map(({ slug }) => ({
    url: `${BASE_URL}/product/${slug}`,
    // lastModified,
  }));
}
