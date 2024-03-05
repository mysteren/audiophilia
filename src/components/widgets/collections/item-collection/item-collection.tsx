// React modules
import { useRef, useEffect } from "react";

// Next module
import Image from "next/image";

// Styles
import styles from "./item-collection.module.css";

// Types
import { TypesCollections } from "@/types/collections";
import Link from "next/link";

type Item = {
  item: TypesCollections;
  setCardWidth: (width: number) => void;
};

export default function ItemCollection(props: Item) {
  const { item, setCardWidth } = props;

  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth);
    }
  }, [setCardWidth]);

  return (
    <div ref={cardRef} className={styles.block}>
      <Link className={styles.itemHrefBlock} href={item.url}>
        <Image
          className={styles.image}
          width={480}
          height={320}
          src={item.img}
          alt={item.title}
        />
        <div className={styles.itemBody}>
          <h3 className={styles.itemTitle}>{item.title}</h3>
        </div>
      </Link>
    </div>
  );
}
