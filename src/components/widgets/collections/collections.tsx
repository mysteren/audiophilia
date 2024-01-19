'use client'
// React modules
import { useState, useRef } from "react";

// Styles
import styles from "./collections.module.css";

// Widgets
import ItemCollection from "../item-collection/item-collection";

// Ui functional
import ButtonCollection from "@/components/ui/button-collection/button-collection";

// Types
import { TypesCollections } from '@/types/collections';

export default function Collections(props: { data: any; title: string }) {
  const { data, title } = props;

  const [cardWidth, setCardWidth] = useState(0);
  // const [scrollPosition, setScrollPosition] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - cardWidth,
        behavior: 'smooth',
      });
    }
  };
  
  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
    <div className={styles.blockTitle}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.blockBtn}>
        <ButtonCollection clickLeft={handleScrollLeft} clickRight={handleScrollRight}/>
      </div>
    </div>
    <div className={styles.block}>
      <div  className={styles.blockList} ref={containerRef}>
        {data.map((item: TypesCollections) => {
          return <ItemCollection key={item.id} item={item} setCardWidth={setCardWidth} />;
        })}
      </div>
    </div>
    </>
  );
}
