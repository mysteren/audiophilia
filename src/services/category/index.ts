import { ApiClientInstance } from "@/shared/lib/api/api-client";
import { ApiResponseError } from "@/shared/lib/http/errors";
import { CategoryData } from "@/types/category";
import { CategoryItem } from "@/types/categoryItem";

export function getCategoryTree() {
  return ApiClientInstance.getCategoryTree<CategoryItem[]>();
}

export function getCategory(
  slug: string,
  searchParams: Record<string, string>,
  page: string,
  limit: string
) {
  return ApiClientInstance.getCategory<CategoryData>(
    slug,
    searchParams,
    page,
    limit
  );

  // try {
  //   const result = await ApiClientInstance.getCategory<CategoryData>(
  //     slug,
  //     searchParams,
  //     page,
  //     limit
  //   );
  //   return [result, null]
  // } catch (e) {
  //   return [null, e as ApiResponseError]
  // }
}
