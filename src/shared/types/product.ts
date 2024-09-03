import { ImageFileItem } from "./file.type";
import { Seller } from "./seller";

export type Product = {
  id: number;
  title: string;
  slug: string;
  price: number;
  oldPrice: number;
  text: string;
  metaTitle: string;
  metaDescription: string;
  noCard: boolean;
  files: {
    images: ImageFileItem[];
  };
  properties: Record<string, string | string[] | number | number[]>;
  addition: {
    multiUnit: Record<string, number>;
  };
  seller: Seller;
};

export type Category = {
  title: string;
  slug: string;
};

export type ProductData = {
  product: Product;
  categories: Category[];
  filters: CategoryFilter[];
  seller: Seller;
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


export type ProductAd = Product & {
  shortText: string;
};