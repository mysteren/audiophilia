import { ImageFileItem } from "./file";
import { JSONContent } from "./text";

export type Page = {
  id: number;
  title: string;
  shortText: string;
  text: JSONContent;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  files: {
    images: ImageFileItem[];
  };
};

export type PageParent = {
  id: number;
  title: string;
  slug: string;
};

export type PageChildren = {
  id: number;
  title: string;
  slug: string;
  shortText: string;
  files: {
    images: ImageFileItem[];
  };
};
