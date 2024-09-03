"use client";
import { useState } from "react";
import styles from "./home-slider.module.css";
import "./home-slider.variables.css";
import Slider from "./slider/slider";
import { Slide } from "@/shared/types/slide";
import ArrLeft from "@/shared/ui/icons/arrleft";
import ArrRight from "@/shared/ui/icons/arrright";

type Props = {
  items: Slide[];
};

export default function HomeSlider({ items }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    const nextSlide = (currentSlide + 1) % items.length;
    setCurrentSlide(nextSlide);
  };

  const prevSlide = () => {
    const prevSlide = (currentSlide - 1 + items.length) % items.length;
    setCurrentSlide(prevSlide);
  };

  return (
    <div className={`${styles.slider} ${items[currentSlide].color}`}>
      <button onClick={prevSlide} className={`${styles.btn} ${styles.prev}`}>
        <ArrLeft />
      </button>
      <div className={styles.sliderBlock}>
        {items.map((slide: Slide, index: number) => (
          <Slider
            key={slide.id}
            slide={slide}
            isActive={index === currentSlide}
          />
        ))}
      </div>

      <button onClick={nextSlide} className={`${styles.btn} ${styles.next}`}>
        <ArrRight />
      </button>
    </div>
  );
}
