"use client";
import Button from "@/components/ui/button/button";
import Heart from "@/images/svg/heart.svg";
import Compare from "@/images/svg/sravni.svg";
import { PrintPrice } from "@/lib/utils/price";
import { ToProduct } from "@/lib/utils/route-url";
import { GetFileUrl } from "@/lib/utils/url";
import { Product } from "@/types/product";
import Image, { ImageLoaderProps } from "next/image";
import Link from "next/link";
import styles from "./card.module.css";
import { UploadsImageLoader } from "@/lib/image-loader";
import ToFastOrder from "../to-fast-order/to-fast-order";

// function UploadsImageLoader({
//   src,
//   width,
// }: ImageLoaderProps): string {
//   return src.replace("/src/", `/resize/${width}/`);
// }

type Props = {
  product: Product;
};

export default function Card({ product }: Props) {
  const image = product.files.images?.[0];

  return (
    <div className={styles.container}>
      <div className={styles.topLeftGroup}>
        {/* <Heart /> */}
        {/* <Compare /> */}
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
      {image && (
        <Image
          src={GetFileUrl(image)}
          alt={product.title}
          loader={UploadsImageLoader}
          // unoptimized
          width={360}
          height={360}
          sizes="(max-width: 768px) 80vw, (max-width: 992px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className={styles.image}
        />
      )}

      <div className={styles.blockPrice}>
        <span className={styles.price}>{PrintPrice(product.price)} ₽</span>
      </div>
      <h3 className={styles.title} title={product.title}>
        {product.title}
      </h3>
      {/* <div className={styles.characteristics}>
          <div className={styles.characteristicsBlockInfo}>
            <i className={styles.iconMotor}></i>
            <p className={styles.characterText}>115 л.с.</p>
          </div>
          <div className={styles.characteristicsBlockInfo}>
            <i className={styles.iconTank}></i>
            <p className={styles.characterText}>5.3 л/км</p>
          </div>
          <div className={styles.characteristicsBlockInfo}>
            <i className={styles.iconSpeed}></i>
            <p className={styles.characterText}>189 км/ч</p>
          </div>
        </div> */}
      <div className={styles.bottom}>
        <Link className={styles.toDetail} href={ToProduct(product.slug)}>
          <Button>Подробнее</Button>
        </Link>
        <ToFastOrder productId={product.id}/>
      </div>
    </div>
  );
}
