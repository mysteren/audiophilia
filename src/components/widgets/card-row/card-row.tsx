"use client";
import Button from "@/components/ui/button/button";
import Heart from "@/images/svg/heart.svg";
import Compare from "@/images/svg/sravni.svg";
import { ToProduct } from "@/lib/utils/route-url";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import styles from "./card-row.module.css";
import ToCart from "../to-cart/to-cart";

type Props = {
  product: Product;
};

export default function CardRow({ product }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.topLeftGroup}>
        <Image
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
        />
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
