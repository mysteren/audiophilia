// Next Module
import Image from "next/image";

// Styles
import styles from "./card.module.css";

// Image
import Heart from "@/images/svg/heart.svg";
import Compare from "@/images/svg/sravni.svg";

// Libs
import { PrintPrice } from "@/lib/utils/price";
import { ToProduct } from "@/lib/utils/route-url";
import { GetFileUrl } from "@/lib/utils/url";

// Types
import { TypesProduct } from "@/types/product";

// Ui
import Link from "next/link";
import ButtonPrimary from "@/components/ui/button-primary";

type Props = {
  product: TypesProduct;
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
          src={Heart}
          width={32}
          height={32}
          alt="favorite"
        />
        <Image
          className={styles.icon}
          src={Compare}
          width={32}
          height={32}
          alt="favorite"
        />
      </div>
      {/* <div className={styles.blockImageCard}> */}
      {image && (
        <Image
          src={GetFileUrl(image)}
          alt={product.title}
          width={360}
          height={360}
          sizes="100vw"
          className={styles.image}
        />
      )}
      {/* </div> */}
      
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
          <ButtonPrimary>Подробнее</ButtonPrimary>
        </Link>
        <ButtonPrimary>В&nbsp;корзину</ButtonPrimary>
      </div>
    </div>
  );
}
