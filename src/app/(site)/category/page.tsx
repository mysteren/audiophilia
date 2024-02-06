/* eslint-disable react/jsx-key */
import styles from "./page.module.css";
import { ApiClientInstance } from "@/lib/api/api-client";
import Link from "next/link";

import { CategoryItem } from "@/types/categoryItem";
import { CategoriesTree } from "@/components/layouts/header/components/categories-tree.tsx/categories-tree";


export default async function CatalogPage() {
  const data: CategoryItem[] = await ApiClientInstance.getCategoryTree();

  return (
    <>
      <h1>Каталог</h1>
      {data && <CategoriesTree items={data} />}
    </>
  );
}
