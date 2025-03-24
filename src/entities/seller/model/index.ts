import { ApiClientInstance } from "@/shared/api";
import { toSearchString } from "@/shared/lib/utils/url";
import { SellerData } from "@/shared/types/seller";
import { SitemapSellerDTO } from "../types";

export function getSeller(
  slug: string,
  searchParams: Record<string, string>,
  limit: string | number
) {
  const url = `/seller/${slug}?${toSearchString({
    limit,
    ...searchParams,
  })}`;
  return ApiClientInstance.get<SellerData>(url);
}

export function getSitemapSellers() {
  const url = `/sitemap/sellers`;
  return ApiClientInstance.get<SitemapSellerDTO[]>(url);
}
