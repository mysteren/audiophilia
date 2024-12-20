import { ApiClientInstance } from "@/shared/api";
import { ArticleElement, ArticleElementRSS} from "@/shared/types";
import { ArticleDTO } from "../types";
import { toSearchString } from "@/shared/lib/utils/url";

export function getArticles(
  page: number,
  limit: number
) {
  return ApiClientInstance.get<ArticleElement[]>(
    `/article?${toSearchString({
      page,
      limit,
    })}`
  );
}

export function getArticlesRSS(
  page: number,
  limit: number
) {
  return ApiClientInstance.get<ArticleElementRSS[]>(
    `/rss/article?${toSearchString({
      page,
      limit,
    })}`
  );
}

export function getArticle(slug: string) {
  return ApiClientInstance.get<ArticleDTO>(`/article/${slug}`);
}