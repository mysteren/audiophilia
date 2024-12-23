import { Filter, ProductAd, Сategory } from "@/shared/types";

export type CategoryTreeItem =  {
  title: string;
  slug: string;
  children: CategoryTreeItem[];
}

export type CategoryItem = {
  id: number;
  title: string;
  slug: string;
};

export type CategoryDTO = {
  category: Сategory;
  products: ProductAd[];
  parents: CategoryItem[];
  childrens: CategoryItem[];
  filters: Filter[];
  searchParams?: Record<string, string>;
};

export type SitemapCategoryDTO = {
  slug: string
}

export type CategoryFilterDTO = {
  filters: Filter[];
};