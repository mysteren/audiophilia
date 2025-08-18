import { ImageLoaderProps } from "next/image";

const constdeviceSizes = [640, 750, 828, 1080, 1200, 2048];
const imageSizes = [64, 384];

export default function BaseImageLoader({
  src,
  width,
}: ImageLoaderProps): string {
  return src.replace("/src/", `/resize/${width}/`);
}

export function UploadsImageLoader({ src, width }: ImageLoaderProps): string {
  return src.replace("/src/", `/resize/${width}/`);
}

export function changeResize(src: string, width: number): string {
  return src.replace(/resize\/[0-9]*/, `resize/${width}`);
}

export function getSrcSet(src: string) {
  const matches = src.match(/(.*)\/resize\/[0-9]*\/(.*)/);

  if (matches) {
    return [...imageSizes, ...constdeviceSizes]
      .map((size) => {
        return `${matches[1]}/resize/${size}/${matches[2]} ${size}w`;
      })
      .join(", ");
  }
}
