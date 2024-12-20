import { getArticleCategoryRoot } from "@/entities/article-category/model";
import { Metadata } from "next/types";
import styles from "./page.module.css";
import JournalAside from "@/widgets/journal-aside/ui/journal-aside";
import JournalArticle from "@/widgets/journal-article";

export const revalidate = 20;
const page = 1;
const limit = 18;

export const metadata: Metadata = {
  title: "Журнал market.investsteel",
  description: "Cтатьи, новости промышленности, производства, технологий",
};

export default async function Page() {
  const { articles, childrens } = await getArticleCategoryRoot(page, limit);
  return (
    <>
      <h1>Статьи</h1>
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
