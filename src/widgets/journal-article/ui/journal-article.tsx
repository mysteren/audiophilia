"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { UploadsImageLoader } from "@/shared/lib/image-loader";
import { GetFileUrl } from "@/shared/lib/utils/url";
import { ArticleElement } from "@/shared/types";

import styles from "./journal-article.module.css";

type Props = {
  article: ArticleElement;
};

export default function JournalArticle({
  article: { title, shortText, author, publish, slug, files },
}: Props) {
  const image = files.images?.[0];
  const publishDate = new Date(publish).toLocaleString();

  return (
    <Link className={styles.root} href={`/journal/article/${slug}`}>
      <div className={styles.content}>
        <div className={styles.top}>
          <span className={styles.author}>{author.pubname}</span>
          <span className={styles.date}>{publishDate}</span>
        </div>
        {image ? (
          <Image
            src={GetFileUrl(image)}
            alt={title}
            loader={UploadsImageLoader}
            // unoptimized
            width={480}
            height={300}
            sizes="(max-width: 768px) 80vw, (max-width: 992px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className={clsx(styles.image)}
          />
        ) : (
          <div className={clsx(styles.emptybg, styles.bg)}></div>
        )}
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.text}>{shortText}</div>
      </div>
    </Link>
  );
}
