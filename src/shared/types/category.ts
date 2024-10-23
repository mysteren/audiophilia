import { Filter } from "./categoryFilter";
import { Product, ProductAd } from "./product";

export type Сategory = {
  id: number;
  title: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
  text: string;
  type: string;
};

export type CategoryElement = {
  id: number;
  title: string;
  slug: string;
};

export type CategoryData = {
  category: Сategory;
  products: ProductAd[];
  parents: CategoryElement[];
  childrens: CategoryElement[];
  // filters: Filter[];
  searchParams?: Record<string, string>;
};

export type CategoryFilterData = {
  filters: Filter[];
};
