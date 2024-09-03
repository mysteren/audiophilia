"use client";
import { useState, useRef } from "react";
import styles from "./collections.module.css";
import ItemCollection from "./item-collection/item-collection";
import ButtonCollection from "@/features/button-collection/button-collection";
import { TypesCollections } from "@/shared/types/collections";

type Props = {
  items: TypesCollections[];
};

export default function Collections({ items }: Props) {
  const [cardWidth, setCardWidth] = useState(0);
  // const [scrollPosition, setScrollPosition] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - cardWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className={styles.blockTitle}>
        <div className={styles.blockBtn}>
          <ButtonCollection
            clickLeft={handleScrollLeft}
            clickRight={handleScrollRight}
          />
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.blockList} ref={containerRef}>
          {items.map((item) => {
            return (
              <ItemCollection
                key={item.id}
                item={item}
                setCardWidth={setCardWidth}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
