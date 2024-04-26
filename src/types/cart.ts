export type CartProductItem = {
  id: string | number;
  // count: number;
  counts: CartItemCounts;
};

export type CartItemCounts = Record<string, number>;
