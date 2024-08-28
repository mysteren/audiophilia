import { BASE_URL } from "@/shared/config";
import { getCategories } from "@/services/sitemap";
import { MetadataRoute } from "next";

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  // const lastModified = new Date().toISOString();

  const slugs = await getCategories();

  return slugs.map(({ slug }) => ({
    url: `${BASE_URL}/category/${slug}`,
    // lastModified,
  }));
}