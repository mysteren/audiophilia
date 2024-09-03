import { StaticImageData } from "next/image" 

export type Slide = {
    id: string,
    title: string,
    text: string,
    photo: string;
    url: string;
    color: 'white' | 'black' 
}