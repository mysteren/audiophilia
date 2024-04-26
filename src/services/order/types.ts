import { CartItemCounts } from "@/types/cart";

export type FastOrderDto = {
  name: string;
  email: string;
  phone: string;
  products: { id: string | number; counts: CartItemCounts }[];
};
