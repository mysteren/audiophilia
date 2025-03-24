import { Filter } from "./categoryFilter";
import { ProductElemtent } from "./product";
import { JSONContent } from "./text";

export type Сategory = {
  id: number;
  title: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
  text: JSONContent;
  type: string;
};

export type CategoryElement = {
  id: number;
  title: string;
  slug: string;
};

export type CategoryData = {
  category: Сategory;
  products: ProductElemtent[];
  parents: CategoryElement[];
  childrens: CategoryElement[];
  // filters: Filter[];
  searchParams?: Record<string, string>;
};

export type CategoryFilterData = {
  filters: Filter[];
};
