import { BASE_URL } from "@/shared/config";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages = ["services", "contacts", "about", "confidential"];

  return pages.map((page) => {
    return {
      url: `${BASE_URL}/page/${page}`,
      lastModified,
    };
  });
}
