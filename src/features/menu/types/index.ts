export type UrlPrefix = "page" | "category" | "article" | "product" | "help" | "";

export type MenuTreeItem = {
  title: string;
  slug: string;
  urlPrefix: UrlPrefix;
  children: MenuTreeItem[];
};