export const ToMain = "/";

export const ToCategory = (slug: string) => {
  return `/category/${slug}`;
};

export const ToProduct = (slug: string) => {
  return `/product/${slug}`;
};
export const ToPage = (slug: string) => {
  return `/page/${slug}`;
};
