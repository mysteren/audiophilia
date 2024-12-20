import { ApiClientInstance } from "@/shared/api";
import { ArticleCategoryDTO, ArticleCategoryRootDTO } from "../types";
import { toSearchString } from "@/shared/lib/utils/url";


export function getArticleCategoryRoot(page: number, limit: number) {
  return ApiClientInstance.get<ArticleCategoryRootDTO>(
    `/article-category?${toSearchString({
      page,
      limit,
    })}`
  );
}

export function getArticleCategory(slug: string, page: number, limit: number) {
  return ApiClientInstance.get<ArticleCategoryDTO>(
    `/article-category/${slug}?${toSearchString({
      page,
      limit,
    })}`
  );
}