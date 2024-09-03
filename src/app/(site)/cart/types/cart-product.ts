import { Product } from "@/shared/types/product";

export type CartProduct = {
  product: Product;
  counts: Record<string, number>;
};
