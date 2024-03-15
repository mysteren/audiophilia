export type FastOrderDto = {
  name: string;
  email: string;
  phone: string;
  products: { id: string | number; count: number }[];
};
