import { StaticImageData } from "next/image"
import { ImageFileItem } from "./filte.type"

export type TypesProduct = {
    id: number;
    title: string;
    slug: string;
    price: number;
    oldPrice: number;
    files: {
        images: ImageFileItem[];
    };
}