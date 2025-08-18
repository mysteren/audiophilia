"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.css";
import ImageViewer from "@/features/image-viewer";
import { UploadsImageLoader } from "@/shared/lib/image-loader";

type Props = {
  images: { src: string; alt?: string; showAsMain?: boolean }[];
};

export function Gallery({ images }: Props) {
  const [active, setActive] = useState<number>(-1);
  const clearHandler = () => {
    setActive(-1);
  };

  const toNext = useCallback(() => {
    if (active >= 0) {
      const next = active + 1;
      setActive(next >= images.length ? 0 : next);
    }
  }, [active, images.length]);

  const toPrev = useCallback(() => {
    if (active >= 0) {
      const next = active - 1;
      setActive(next < 0 ? images.length - 1 : next);
    }
  }, [active, images.length]);

  const keyHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        toNext();
      } else if (e.key === "ArrowLeft") {
        toPrev();
      } else if (e.key === "Escape") {
        clearHandler();
      }
    },
    [toNext, toPrev]
  );

  useEffect(() => {
    window.addEventListener("keydown", keyHandler);
    return () => {
      window.removeEventListener("keydown", keyHandler);
    };
  }, [keyHandler]);

  const viewer = () => {
    if (images[active]) {
      return (
        <ImageViewer
          src={images[active].src}
          alt={images[active].alt ?? ""}
          onClose={clearHandler}
          onNext={toNext}
          onPrev={toPrev}
        />
      );
    }
  };

  return (
    <>
      <div className="grid">
        {images.map((image, i) => {
          if (!image.showAsMain) {
            return;
          }

          return (
            <div
              className={styles.item}
              key={`image-${i}`}
              onClick={() => setActive(i)}
            >
              <Image
                className="image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={image.alt ?? ""}
                loading="lazy"
                priority={false}
                placeholder="empty"
                loader={UploadsImageLoader}
                width={720}
                height={480}
                src={image.src}
                itemProp="contentUrl"
              ></Image>
              {/* <Image
            src={GetFileUrl(image)}
            alt={title}
            loader={UploadsImageLoader}
            // unoptimized
            width={360}
            height={360}
            sizes="(max-width: 768px) 80vw, (max-width: 992px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className={styles.image}
          /> */}
            </div>
          );
        })}
      </div>
      {viewer()}
    </>
  );
}
