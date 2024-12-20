import { getArticleCategory } from "@/entities/article-category/model";
import { ArticleCategoryDTO } from "@/entities/article-category/types";
import { ApiResponseError } from "@/shared/api";
import JournalArticle from "@/widgets/journal-article";
import JournalAside from "@/widgets/journal-aside/ui/journal-aside";
import { notFound } from "next/navigation";
import styles from "../../page.module.css";

const page = 1;
const limit = 18;

export const revalidate = 20;

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

async function fetchData(
  slug: string,
  page: number,
  limit: number
): Promise<ArticleCategoryDTO> {
  try {
    const result = await getArticleCategory(slug, page, limit);
    return result;
  } catch (e) {
    if (e instanceof ApiResponseError && e.responseErrorData.status === 404) {
      notFound();
    }
  }
  return undefined as unknown as ArticleCategoryDTO;
}

export async function generateMetadata(props: Props) {
  const { slug } = await props.params;

  const { category } = await fetchData(slug, page, limit);
  const { metaTitle: title, metaDescription: description } = category;
  return {
    title,
    description,
    alternates: {
      canonical: `/journal/article-category/${slug}`,
    },
  };
}

export default async function Page(props: Props) {
  const { slug } = await props.params;
  const { articles, childrens, category } = await fetchData(slug, page, limit);
  return (
    <>
      <h1>{category.title}</h1>
      <div className={styles.main}>
        <aside className={styles.aside}>
          <JournalAside items={childrens} />
        </aside>
        <div className={styles.body}>
          <div className={styles.articles}>
            {articles.map((article, index) => {
              return (
                <JournalArticle article={article} key={`cat-artc-${index}`} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}