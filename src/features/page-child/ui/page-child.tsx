"use client";

import { UploadsImageLoader } from "@/shared/lib/image-loader";
import { PageChildren } from "@/shared/types";

import { GetFileUrl } from "@/shared/lib/utils/url";
import Button from "@/shared/ui/button/button";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "./page-child.module.css";

type Props = {
  page: PageChildren;
};

export default function PageChild({
  page: { id, title, shortText, slug, files },
}: Props) {
  const image = files.images?.[0];

  return (
    <div key={`work-item-${id}`} className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
      {image && (
        <Image
          src={GetFileUrl(image)}
          alt={title}
          loader={UploadsImageLoader}
          width={480}
          height={300}
          sizes="(max-width: 768px) 80vw, (max-width: 992px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className={clsx(styles.image, styles.bg)}
        />
      )}

      <p>{shortText}</p>
      <p>
        <Link href={`/page/${slug}`}>
          <Button>Подробнее</Button>
        </Link>
      </p>
    </div>
  );
}
