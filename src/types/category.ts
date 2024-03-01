import { Filter } from "./categoryFilter";
import { Product } from "./product";

export type Сategory = {
  title: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
  text: string;
  type: string;
};

export type CategoryElement = {
  title: string;
  slug: string;
};

export type CategoryData = {
  category: Сategory;
  products: Product[];
  parents: CategoryElement[];
  childrens: CategoryElement[];
  filters: Filter[];
  searchParams?: Record<string, string>;
};
