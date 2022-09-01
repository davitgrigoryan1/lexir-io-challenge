import { StaticImageData } from "next/image";

export interface Products {
  id?: number;
  title: string;
  category: string;
  price: number;
  currency: string;
  thumbnail: StaticImageData | string;
  thumbnailAlt: string;
}
