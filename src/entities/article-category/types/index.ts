import {
  ArticleСategory,
  Article,
  ArticleCategoryElement,
  ArticleElement,
} from "@/shared/types";

export type ArticleCategoryDTO = {
  category: ArticleСategory;
  articles: ArticleElement[];
  parents: ArticleCategoryElement[];
  childrens: ArticleCategoryElement[];
};

export type ArticleCategoryRootDTO = {
  articles: ArticleElement[];
  childrens: ArticleCategoryElement[];
};
