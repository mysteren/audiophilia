'use client'
import styles from './slider.module.css';
import { Slide } from '@/types/slide';
import Image from 'next/image';

type SliderProps = {
  slide: Slide;
  isActive: boolean;
}

export default function Slider(props: SliderProps) {

  const { slide, isActive } = props;

  return (
    <div className={`${styles.slider} ${isActive ? styles.active : ''}`}>
      <div className={styles.sliderBody}>
        <h2 className={styles.title}>{slide.title}</h2>
        <p className={styles.text}>{slide.text}</p>
      </div>
      <div>
        <Image width={100} height={100} className={styles.sliderImage} src={slide.photo} alt='1'/>
      </div>
    </div>
  )
}
