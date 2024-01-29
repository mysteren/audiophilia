"use client";
// React Module
import { useState } from "react";

// Next modules
import Image from "next/image";

// Styles
import styles from "./card-slider.module.css";
import { API_INTERNAL } from "@/config";

type Props = {
  images: string[];
  alt: string;
};



export default function CardSlider({ images, alt }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handdleprev = () => {
    setActiveIndex(activeIndex - 1);
  };

  const handdlenext = () => {
    setActiveIndex(activeIndex + 1)
  };

  return (
    <div className={styles.slider}>
      <div className={styles.images}>
        <Image src={images[activeIndex]} alt={alt} width={500} height={500} />
      </div>
      <button onClick={handdleprev} className={styles.left}>
        L
      </button>
      <button onClick={handdlenext} className={styles.right}>
        R
      </button>
    </div>
  );
}
