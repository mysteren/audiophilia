import { ApiClientInstance } from "@/lib/api/api-client";
import { CategoryItem } from "@/types/categoryItem";

export function getCategoryTree() {
    return ApiClientInstance.getCategoryTree<CategoryItem[]>();
}