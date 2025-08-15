"use client";
import { UploadsImageLoader } from "@/shared/lib/image-loader";
import { PrintPrice } from "@/shared/lib/utils/price";
import { GetFileUrl } from "@/shared/lib/utils/url";
import { ProductElemtent } from "@/shared/types/product";
import Button from "@/shared/ui/button/button";
import NoImage from "@/shared/ui/noimage/noimage";
import Image from "next/image";
import Link from "next/link";
import styles from "./card-row.module.css";
import ToCart from "@/features/to-cart/to-cart";

type Props = {
  product: ProductElemtent;
};

export default function CardRow({ product }: Props) {
  const { title, files, slug, createdAt, } = product;

  const date = new Date(createdAt);

  const image = files.images?.[0];
  return (
    <div className={styles.root}>
      <div className={styles.gallery}>
        {image ? (
          <Image
            src={GetFileUrl(image)}
            alt={title}
            loader={UploadsImageLoader}
            // unoptimized
            width={360}
            height={360}
            sizes="(max-width: 768px) 80vw, (max-width: 992px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className={styles.image}
          />
        ) : (
          <NoImage />
        )}
      </div>
      <Link className={styles.info} href={`/product/${slug}`}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.date}>{date.toLocaleDateString()}</span>
        <span className={styles.toDetail}>Подробнее</span>
        
      </Link>
      {/* <div className={styles.info}>
        <ToCart productId={product.id} />
      </div> */}

      {/* <h3 className={styles.title} title={product.title}>
        {product.title}
      </h3>
      <div className={styles.seller}>
        <span className={styles.val}>{product.seller.title}</span>
        {!!product.seller?.addition?.site && (
          <a className={styles.val} href={product.seller.addition.site}>
            {getHostname(product.seller.addition.site)}
          </a>
        )}
        {!!product.seller?.addition?.phones?.length && (
          <a
            href={`tel:${product.seller.addition.phones[0]}`}
            className={styles.val}
          >
            {ruPhoneTransformer(product.seller.addition.phones[0])}
          </a>
        )}
        {!!product.seller?.addition?.emails?.length && (
          <a
            className={styles.val}
            href={`mailto:${product.seller.addition.emails[0]}`}
          >
            {product.seller.addition.emails[0]}
          </a>
        )}
      </div>
      <div className={styles.actions}>
        <Link className={styles.toDetail} href={ToProduct(product.slug)}>
          <Button>Подробнее</Button>
        </Link>
        <ToCart productId={product.id} />
      </div> */}
    </div>
  );
}
