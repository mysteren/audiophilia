import { ImageFileItem } from "./file";
import { JSONContent } from "./text";

export type ArticleAuthor = {
  pubname: string;
  slug: string;
};

export type Article = {
  id: number;
  title: string;
  slug: string;
  shortText: string;
  text: JSONContent;
  metaTitle: string;
  metaDescription: string;
  publish: string;
  author: ArticleAuthor;
  files: {
    images: ImageFileItem[];
  };
};

export type ArticleElement = {
  title: string;
  slug: string;
  shortText: string;
  text: string;
  publish: string;
  author: ArticleAuthor;
  files: {
    images: ImageFileItem[];
  };
};

export type ArticleElementRSS = ArticleElement & {
  text: JSONContent;
};
