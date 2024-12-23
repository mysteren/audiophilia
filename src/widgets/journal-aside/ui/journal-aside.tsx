import Link from "next/link";
import styles from "./journal-aside.module.css";
import { ArticleCategoryElement } from "@/shared/types";
import AsideContainer from "@/shared/ui/aside-container/ui/aside-container";

type Props = {
  items: ArticleCategoryElement[];
};

export default function JournalAside({ items }: Props) {
  const categories = [
    { title: "Свежее", to: "/journal" },
    ...items.map(({ title, slug }) => {
      return { title, to: `/journal/article-category/${slug}` };
    }),
  ].map(({ title, to }, i) => {
    return (
      <div key={`article-category-${i}`}>
        <Link className={styles.category} href={to}>
          {title}
        </Link>
      </div>
    );
  });

  return (
    <AsideContainer>
      <div className={styles.categories}>{categories}</div>
    </AsideContainer>
  );
}
