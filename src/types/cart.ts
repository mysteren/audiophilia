export type CartProductItem = {
  id: string | number;
  count: number;
  units: Record<string, number>;
};