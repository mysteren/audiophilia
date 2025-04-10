import { ApiClientInstance } from "@/shared/api";
import { PageDto, SitemapPageDTO } from "../type";

export function getPage(slug: string) {
  return ApiClientInstance.get<PageDto>(`/page/${slug}`);
}

export function getSitemapPages() {
  const url = `/sitemap/pages`;
  return ApiClientInstance.get<SitemapPageDTO[]>(url)
}