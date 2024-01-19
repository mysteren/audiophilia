import { StaticImageData } from "next/image"
import { ImageFileItem } from "./filte.type"

export type TypesProduct = {
    id: number;
    title: string;
    slug: string;
    price: number;
    oldPrice: number;
    credit: number,
    files: {
        images: ImageFileItem[];
    };
}