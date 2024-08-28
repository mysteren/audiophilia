import { ApiClientInstance } from "@/shared/lib/api/api-client";
import { SitemapCategory, SitemapProduct } from "./types";

export async function getProducts(limit: number, page: number) {
  return ApiClientInstance.sitemapProducts<SitemapProduct[]>(limit, page);
}

export async function getProductsCount() {
  return ApiClientInstance.sitemapProductsCount<number>();
}

export async function getCategories() {
  return ApiClientInstance.sitemapCategories<SitemapCategory[]>();
}
