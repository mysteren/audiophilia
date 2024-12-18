import { TypesCollections } from "@/shared/types/collections";
import Image from "next/image";
import Link from "next/link";
import styles from './item-categories.module.css';

type Item = {
  item: TypesCollections;
}

export default function ItemCategories(props: Item) {
    const { item } = props;
  return (
    <div className={styles.block}>
      <Link className={styles.itemHrefBlock} href={item.url}>
        <Image
          className={styles.image}
          width={156}
          height={90}
          src={item.img}
          alt={`изображение`}
        />
        <div className={styles.itemBody}>
          <h3 className={styles.itemTitle}>{item.title}</h3>
        </div>
      </Link>
    </div>
  )
}
