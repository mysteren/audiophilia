// React modules
import { useRef, useEffect } from "react";

// Next module
import Image from "next/image";

// Styles
import styles from "./item-collection.module.css";

// Types
import { TypesCollections } from "@/types/collections";

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
    <div ref={cardRef}className={styles.block}>
      <a className={styles.itemHrefBlock} href="">
        <Image className={styles.itemImage} unoptimized src={item.url} alt={item.title} />
        <div className={styles.itemBody}>
          <h3 className={styles.itemTitle}>{item.title}</h3>
        </div>
      </a>
    </div>
  );
}
