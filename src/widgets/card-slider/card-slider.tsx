"use client";
// React Module
import { useEffect, useState } from "react";

// Next modules
import Image from "next/image";

// Styles
import styles from "./card-slider.module.css";

// Icons
import ArrLeft from "@/components/icons/arrleft";
import ArrRight from "@/components/icons/arrright";
import { UploadsImageLoader } from "@/shared/lib/image-loader";

type Props = {
  images: string[];
  alt: string;
};

export default function CardSlider({ images, alt }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndex = images.length - 1;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 150);
  }, [activeIndex]);

  const handdleprev = () => {
    if (!visible) {
      return;
    }
    setVisible(false);
    setTimeout(() => {
      const newIndex = activeIndex === 0 ? lastIndex : activeIndex - 1;
      setActiveIndex(newIndex);
    }, 50);
  };

  const handdlenext = () => {
    if (!visible) {
      return;
    }
    setVisible(false);
    setTimeout(() => {
      const newIndex = activeIndex === lastIndex ? 0 : activeIndex + 1;
      setActiveIndex(newIndex);
    }, 50);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.images}>
        <Image
          className={`${styles.image} ${visible ? styles.visible : ""}`}
          src={images[activeIndex]}
          loader={UploadsImageLoader}
          alt={alt}
          width={500}
          height={500}
        />
      </div>
      {images.length -1 && (
        <>
          <button
            aria-label="to prev slider"
            onClick={handdleprev}
            className={`${styles.btn} ${styles.left}`}
          >
            {ArrLeft()}
          </button>
          <button
            aria-label="to next slider"
            onClick={handdlenext}
            className={`${styles.btn} ${styles.right}`}
          >
            {ArrRight()}
          </button>
        </>
      )}
    </div>
  );
}
