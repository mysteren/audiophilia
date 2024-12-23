import { Product, Сategory, CategoryFilter } from "@/shared/types";

export type ProductDTO = {
  product: Product;
  categories: Сategory[];
  filters: CategoryFilter[];
};


export type SitemapProductDTO = {
  slug: string
}
