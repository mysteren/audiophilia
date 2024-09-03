
import { ApiClientInstance } from "@/shared/api";
import { SitemapCategory, SitemapProduct } from "./types";
import { toSearchString } from "@/shared/lib/utils/url";

export async function getProducts(limit: number, page: number) {
  const url = `/sitemap/products?${toSearchString({ limit, page })}`;
  return ApiClientInstance.get<SitemapProduct[]>(url);
}

export async function getProductsCount() {
  const url = "/sitemap/products-count";
  return ApiClientInstance.get<number>(url);
}

export async function getCategories() {
  const url = `/sitemap/categories`;
  return ApiClientInstance.get<SitemapCategory[]>(url);
}
