"use client";

import styles from "./article-image.module.css";
import Image from "next/image";
import { CommonFileItem } from "@/shared/types";
import { UploadsImageLoader } from "@/shared/lib/image-loader";
import { GetFileUrl } from "@/shared/lib/utils/url";

type Props = {
  src: CommonFileItem;
  title: string;
};

export default function ArticleImage({ src, title }: Props) {
  return (
    <Image
      src={GetFileUrl(src)}
      alt={title}
      loader={UploadsImageLoader}
      // unoptimized
      width={800}
      height={420}
      // sizes="80vw"
      sizes="(max-width: 768px) 80vw, (max-width: 992px) 50vw, (max-width: 1200px) 33vw, 25vw"
      className={styles.img}
    />
  );
}
