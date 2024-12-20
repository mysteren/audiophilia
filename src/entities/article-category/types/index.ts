import { ArticleСategory, Article, ArticleCategoryElement } from "@/shared/types";


export type ArticleCategoryDTO = {
  category: ArticleСategory;
  articles: Article[];
  parents: ArticleCategoryElement[];
  childrens: ArticleCategoryElement[];
};

export type ArticleCategoryRootDTO = {
  articles: Article[];
  childrens: ArticleCategoryElement[];
};