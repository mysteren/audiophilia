export type Seller = {
  slug: string;
  title: string;
  addition: {
    site?: string;
    city?: string;
    phones?: string[];
    emails?: string[];
  };
};
