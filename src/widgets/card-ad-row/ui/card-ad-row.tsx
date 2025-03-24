"use client";
import SellerInfo from "@/features/seller-info";
import { ToProduct } from "@/shared/lib/utils/route-url";
import { ProductElemtent } from "@/shared/types/product";
import Button from "@/shared/ui/button/button";
import Link from "next/link";
import styles from "./card-ad-row.module.css";

type Props = {
  product: ProductElemtent;
};

export default function CardAdRow({ product }: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div>
          <h3 className={styles.title} title={product.title}>
            {product.title}
          </h3>
          <pre className={styles.text}>{product.shortText}</pre>
        </div>

        <div className={styles.col2}>
          {product.seller ? (
            <SellerInfo seller={product.seller} />
          ) : (
            <div></div>
          )}
          <Link className={styles.toDetail} href={ToProduct(product.slug)}>
            <Button>Подробнее</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
