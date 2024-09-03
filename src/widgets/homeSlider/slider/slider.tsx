import { Text } from "@/shared/ui/text";
import styles from "./slider.module.css";
import { Slide } from "@/shared/types/slide";
import Image from "next/image";
import Link from "next/link";

type SliderProps = {
  slide: Slide;
  isActive: boolean;
};

export default function Slider(props: SliderProps) {
  const { slide, isActive } = props;

  return (
    <div className={`${styles.slider} ${isActive ? styles.active : ""}`}>
      <div className={styles.sliderBodyText}>
        <h2 className={styles.title}>{slide.title}</h2>
        <Link href={slide.url} className={styles.text}>
          <Text>{slide.text}</Text>
        </Link>
      </div>
      <Image
        width={100}
        height={100}
        sizes="85vw"
        className={styles.sliderImageBg}
        src={slide.photo}
        alt={`sldide-${slide.id}`}
      />
    </div>
  );
}
