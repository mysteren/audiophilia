import { ImageFileItem } from "@/types/filte.type";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { GetFileUrl } from "@/lib/utils/url";
import { ToProduct } from "@/lib/utils/route-url";
import { PrintPrice } from "@/lib/utils/price";

type Props = {
  price: number;
  oldPrice?: number
  title: string;
  slug: string;
  image?: ImageFileItem;
};

export default function ProductCard({ title: name, price, image, oldPrice, slug }: Props) {
  return (
    <div className={`${styles.container} cart hover`}>
      {image && (
        <Image
          className={styles.image}
          src={GetFileUrl(image)}
          alt={name}
          // loader={imageLoader}
          width={240}
          height={240}
        />
      )}
      <div className={styles.info}>
        <Link className={styles.link} href={ToProduct(slug)}>
          <p className={styles.name}>{name}</p>
        </Link>
        <div className={styles.prices}>
          <span className={styles.price}>{PrintPrice(price)} ₽</span>
          { !!oldPrice && <span className={styles.oldPrice}>{PrintPrice(oldPrice)} ₽</span> }
        </div>
        {/* <ButtonPrimaryComponent>В корзину</ButtonPrimaryComponent> */}
      </div>
    </div>
  );
}
