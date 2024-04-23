import { ImageFileItem } from "./file.type";

export type Product = {
  id: number;
  title: string;
  slug: string;
  price: number;
  oldPrice: number;
  text: string;
  metaTitle: string;
  metaDescription: string;
  files: {
    images: ImageFileItem[];
  };
  properties: Record<string, string | string[] | number | number[]>;
};

export type Category = {
  title: string;
  slug: string;
};

export type ProductData = {
  product: Product;
  categories: Category[];
  filters: CategoryFilter[];
};

export type CategoryFilterOption = {
  value: string;
  name: string;
};

export type CategoryFilter = {
  key: string;
  name: string;
  type: string;
  options: CategoryFilterOption[];
  addition: {
    unit?: string;
  };
};
