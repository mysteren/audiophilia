import { ApiClientInstance } from "@/shared/api";
import { CategoryData } from "@/shared/types/category";
import { CategoryItem } from "@/shared/types/categoryItem";
import { Category } from "@/shared/types/product";

export function getCategoryTree() {
  return ApiClientInstance.get<CategoryItem[]>("/category/tree");
}

export function getCategory(
  slug: string,
  searchParams: Record<string, string>,
  page: string,
  limit: string
) {
  const searchQuery = new URLSearchParams({
    select: "seller,noCart,shortText",
    page,
    limit,
    ...searchParams,
  });
  const url = `/category/${slug}?${searchQuery}`;

  return ApiClientInstance.get<CategoryData>(url);
}

export function isAdByCategories(categories: Category[]) {
  return categories.some(({ slug }) => {
    return slug === "uslugi";
  });
}
