import Image from "next/image";
import styles from "./styles.module.css";
import CloseIcon from "@/shared/ui/icons/close";
import { ArrowLeftIcon } from "@/shared/ui/icons/arrow-left/arrow-left";
import { ArrowRightIcon } from "@/shared/ui/icons/arrow-right/arrow-right";
import { UploadsImageLoader } from "@/shared/lib/image-loader";

type Props = {
  src: string;
  alt: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export function ImageViewer({ src, alt, onClose, onNext, onPrev }: Props) {
  return (
    <div className={`${styles.wrap} ${src && styles.show}`}>
      <button
        className={`${styles.close} ${styles.btn}`}
        onClick={() => onClose()}
      >
        <CloseIcon />
      </button>
      <Image
        onClick={(e) => e.stopPropagation()}
        className={styles.image}
        sizes="100vw"
        alt={alt}
        loading="lazy"
        priority={false}
        placeholder="empty"
        loader={UploadsImageLoader}
        width={1920}
        height={1080}
        src={src}
        itemProp="contentUrl"
      ></Image>
      <div className={styles.bottom}>
        <button
          className={`${styles.prev} ${styles.btn}`}
          onClick={() => onPrev()}
        >
          <ArrowLeftIcon />
        </button>
        <a className={styles.btn2} target="_blank" href={src}>
          Исходник
        </a>
        <button
          className={`${styles.next} ${styles.btn}`}
          onClick={() => onNext()}
        >
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
}
