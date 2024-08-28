import { ImageLoaderProps } from "next/image";

export default function BaseImageLoader({
  src,
  width,
}: ImageLoaderProps): string {
  return src.replace("/src/", `/resize/${width}/`);
}


export function UploadsImageLoader({
  src,
  width,
}: ImageLoaderProps): string {
  return src.replace("/src/", `/resize/${width}/`);
}

// export