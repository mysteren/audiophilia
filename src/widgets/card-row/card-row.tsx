"use client";
import { ToProduct } from "@/shared/lib/utils/route-url";
import { Product } from "@/shared/types/product";
import Button from "@/shared/ui/button/button";
import Link from "next/link";
import ToCart from "../../features/to-cart/to-cart";
import styles from "./card-row.module.css";
import { getHostname } from "@/shared/lib/utils/url";
import { ruPhoneTransformer } from "@/shared/lib/utils/phone";

type Props = {
  product: Product;
};

export default function CardRow({ product }: Props) {
  return (
    <div className={styles.root}>
      <div>
        <h3 className={styles.title} title={product.title}>
          {product.title}
        </h3>
        <div className={styles.sellerInfo}>
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
      </div>
      <div className={styles.actions}>
        <Link className={styles.toDetail} href={ToProduct(product.slug)}>
          <Button>Подробнее</Button>
        </Link>
        <ToCart productId={product.id} />
      </div>
    </div>
  );
}
