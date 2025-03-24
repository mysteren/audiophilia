import { ProductElemtent } from "./product";
import { JSONContent } from "./text";

export type Seller = {
  slug: string;
  title: string;
  text: JSONContent;
  metaTitle: string;
  metaDescription: string;
  addition: {
    site?: string;
    city?: string;
    phones?: string[];
    emails?: string[];
  };
};

export type SellerData = {
  seller: Seller;
  products: ProductElemtent[];
};
