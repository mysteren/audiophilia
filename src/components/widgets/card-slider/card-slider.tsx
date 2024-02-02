"use client";
// React Module
import { useState } from "react";

// Next modules
import Image from "next/image";

// Styles
import styles from "./card-slider.module.css";

// Icons
import ArrLeft from "@/components/icons/arrleft";
import ArrRight from "@/components/icons/arrright";

type Props = {
  images: string[];
  alt: string;
};



export default function CardSlider({ images, alt }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndex = images.length - 1;

  const handdleprev = () => {
    const newIndex = activeIndex === 0 ? lastIndex : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const handdlenext = () => {
    const newIndex = activeIndex === lastIndex ? 0 : activeIndex + 1;
    setActiveIndex(newIndex)
  };

  return (
    <div className={styles.slider}>
      <div className={styles.images}>
        <Image className={styles.image} src={images[activeIndex]} alt={alt} width={500} height={500} />
      </div>
      <button onClick={handdleprev} className={` ${styles.btn} ${styles.left}`}>
        {ArrLeft()}
      </button>
      <button onClick={handdlenext} className={`${styles.btn} ${styles.right}`}>
        {ArrRight()}
      </button>
    </div>
  );
}
