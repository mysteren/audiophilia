'use client'

// React Modules
import { useState } from 'react';

// Styles
import styles from './home-slider.module.css';

// Widgets
import Slider from './slider/slider';

// Data
import { slides } from '@/data/slider';

// Types
import { Slide } from '@/types/slide';

export default function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    const nextSlide = (currentSlide + 1) % slides.length;
    setCurrentSlide(nextSlide);
  };

  const prevSlide = () => {
    const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(prevSlide);
  };
  
  return (
    <div className={styles.slider}>
      <div className={styles.sliderBlock}>
        {slides.map((slide: Slide, index: number) => (
          <Slider key={slide.id} slide={slide} isActive={index === currentSlide}/>
        ))}
      </div>
        <button onClick={prevSlide} className={styles.prev}></button>
        <button onClick={nextSlide} className={styles.next}></button>
    </div>
  )
}
