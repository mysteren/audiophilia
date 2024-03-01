import { ImageFileItem } from "./file.type";

export type Product = {
    id: number;
    title: string;
    slug: string;
    price: number;
    oldPrice: number;
    files: {
        images: ImageFileItem[];
    };
}