import { Product } from "@/types/product";

export type CartProduct = {
  product: Product;
  counts: Record<string, number>;
};
