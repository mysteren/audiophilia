export * from './model'


// import { ApiClientInstance } from "@/shared/api";
// import { CategoryData, CategoryFilterData } from "@/shared/types/category";
// import { CategoryTreeItem } from "@/shared/types/categoryItem";
// import { Category } from "@/shared/types/product";

// export function getCategoryTree() {
//   return ApiClientInstance.get<CategoryTreeItem[]>("/category/tree");
// }

// export function getCategory(
//   slug: string,
//   searchParams: Record<string, string>,
//   page: string,
//   limit: string
// ) {
//   const searchQuery = new URLSearchParams({
//     select: "seller,noCart,shortText",
//     page,
//     limit,
//     ...searchParams,
//   });
//   const url = `/category/${slug}?${searchQuery}`;

//   return ApiClientInstance.get<CategoryData>(url);
// }

// export function getCategoryFilters(
//   categoryId: number,
//   searchParams: Record<string, string>
// ) {
//   const searchQuery = new URLSearchParams({
//     ...searchParams,
//   });
//   const url = `/category/filters/${categoryId}?${searchQuery}`;

//   return ApiClientInstance.get<CategoryFilterData>(url);
// }

// export function isAdByCategories(categories: Category[]) {
//   return categories.some(({ slug }) => {
//     return slug === "uslugi";
//   });
// }
