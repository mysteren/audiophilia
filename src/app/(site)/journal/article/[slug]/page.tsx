import { notFound } from "next/navigation";
import { cache } from "react";

import { getArticleCategoryRoot } from "@/entities/article-category/model";
import { getArticle } from "@/entities/article/model";
import { ArticleDTO } from "@/entities/article/types";
import ArticleImage from "@/features/article-image";
import TextContent from "@/features/text-content";
import { ApiResponseError } from "@/shared/api";
import { textContentParse } from "@/shared/lib/text/json-content";
import "@/shared/styles/site/text.css";
import JournalAside from "@/widgets/journal-aside/ui/journal-aside";
import styles from "./page.module.css";
import ContentBlock from "@/shared/ui/content-block";

export const revalidate = 20;

const fetchArticle = cache(async (slug: string) => {
  try {
    const result = await getArticle(slug);
    return result;
  } catch (e) {
    if (e instanceof ApiResponseError && e.responseErrorData.status === 404) {
      notFound();
    }
  }
  return undefined as unknown as ArticleDTO;
});

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Props) {
  const { slug } = await props.params;
  const data = await fetchArticle(slug);
  const { metaTitle: title, metaDescription: description } = data;
  return {
    title,
    description,
    alternates: {
      canonical: `/journal/article/${slug}`,
    },
  };
}

export default async function Page(props: Props) {
  const { slug } = await props.params;
  const data = await fetchArticle(slug);
  const { title, files, author, publish } = data;
  const content = textContentParse(data.text);
  const publishDate = new Date(publish).toLocaleString();
  const { childrens } = await getArticleCategoryRoot(1, 1);

  const image = files.images?.[0];

  return (
    <>
      <div className={styles.main}>
        <h1>{title}</h1>
        <div></div>
      </div>
      <div className={styles.main}>
        <div className={styles.aside}>
          <JournalAside items={childrens} />
        </div>
        <div className={styles.section}>
          <ContentBlock>
            <div className={styles.top}>
              <span className={styles.author}>{author.pubname}</span>
              <span className={styles.date}>{publishDate}</span>
            </div>

            {image && <ArticleImage src={image} title={title} />}
            <TextContent content={content} />
          </ContentBlock>
        </div>
      </div>
    </>
  );
}

{
  /* <div className={styles.top}>
        <Breadcrumbs
          items={[{ title: "Главная", href: "/" }, { title: "Контакты" }]}
        />
      </div>
      <h1 className={styles.title}>Контакты</h1>

      <ContentBlock>
      
      </ContentBlock>
      </div> */
}
