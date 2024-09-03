/* eslint-disable react/jsx-key */

import { getCategoryTree } from "@/entities/category";
import { CategoriesTree } from "@/layouts/header/ui/categories-tree.tsx/categories-tree";
import { CategoryItem } from "@/shared/types/categoryItem";

export default async function CatalogPage() {
  const data: CategoryItem[] = await getCategoryTree();

  return (
    <>
      <h1>Каталог</h1>
      {data && <CategoriesTree items={data} />}
    </>
  );
}
