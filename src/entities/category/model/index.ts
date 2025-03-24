import { ApiClientInstance } from "@/shared/api";
import { toSearchString } from "@/shared/lib/utils/url";
import { CategoryTreeItem } from "@/shared/types/categoryItem";
import { Category } from "@/shared/types/product";
import { CategoryDTO, CategoryFilterDTO, SitemapCategoryDTO } from "../types";

export function getCategoryTree() {
  return ApiClientInstance.get<CategoryTreeItem[]>("/category/tree");
}

export function getCategory(
  slug: string,
  searchParams: Record<string, string>,
  page: string,
  limit: string
) {
  const url = `/category/${slug}?${toSearchString({
    select: "seller,type,shortText",
    page,
    limit,
    ...searchParams,
  })}`;

  return ApiClientInstance.get<CategoryDTO>(url);
}

export function getCategoryFilters(
  categoryId: number,
  searchParams: Record<string, string>
) {
  const searchQuery = new URLSearchParams({
    ...searchParams,
  });
  const url = `/category/filters/${categoryId}?${searchQuery}`;

  return ApiClientInstance.get<CategoryFilterDTO>(url);
}

export function isAdByCategories(categories: Category[]) {
  return categories.some(({ slug }) => {
    return slug === "uslugi";
  });
}

export function getSitemapCategories() {
  const url = `/sitemap/categories`;
  return ApiClientInstance.get<SitemapCategoryDTO[]>(url);
}