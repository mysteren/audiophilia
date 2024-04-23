import { ApiClientInstance } from "@/lib/api/api-client";
import { Product, ProductData } from "@/types/product";

export function getProductsByIds(ids: Array<number | string>) {
  return ApiClientInstance.getProductsByIds<Product[]>(ids.join(","));
}

export function getProduct(slug: string) {
  return ApiClientInstance.getProduct<ProductData>(slug);
}
