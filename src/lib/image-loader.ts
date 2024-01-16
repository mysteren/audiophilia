import { ImageLoaderProps } from "next/image";

export default function BaseImageLoader({
  src,
  width,
}: ImageLoaderProps): string {
  // console.log({ src, width });
  return src.replace("/src/", `/resize/${width}/`);
}
