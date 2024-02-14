import { ImageFileItem } from "./file.type";

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