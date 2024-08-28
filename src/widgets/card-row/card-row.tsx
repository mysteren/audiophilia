"use client";
import { ToProduct } from "@/shared/lib/utils/route-url";
import Button from "@/shared/ui/button/button";
import { Product } from "@/types/product";
import Link from "next/link";
import ToCart from "../to-cart/to-cart";
import styles from "./card-row.module.css";

type Props = {
  product: Product;
};

export default function CardRow({ product }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.topLeftGroup}>
        {/* <Image
          className={styles.icon}
          unoptimized
          src={Heart}
          width={32}
          height={32}
          alt="favorite"
        />
        <Image
          className={styles.icon}
          unoptimized
          src={Compare}
          width={32}
          height={32}
          alt="favorite"
        /> */}
      </div>
      <h3 className={styles.title} title={product.title}>
        {product.title}
      </h3>

      <Link className={styles.toDetail} href={ToProduct(product.slug)}>
        <Button>Подробнее</Button>
      </Link>
      <ToCart productId={product.id} />
    </div>
  );
}
