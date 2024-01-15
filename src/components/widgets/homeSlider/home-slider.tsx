'use client'
import { useState } from 'react';
import styles from './home-slider.module.css';
import Slider from './slider/slider';
import { slides } from '@/data/slider';

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
  console.log((slides[0].photo));
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
