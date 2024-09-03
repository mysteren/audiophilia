import { CartItemCounts } from "@/shared/types/cart";

export type OrderDto = {
  name: string;
  email: string;
  phone: string;
  products: { id: string | number; counts: CartItemCounts }[];
};
