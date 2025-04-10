import { Page, PageChildren, PageParent } from "@/shared/types";

export type PageDto = {
  page: Page;
  parents: PageParent[];
  childrens: PageChildren[];
};

export type SitemapPageDTO = {
  slug: string;
};
