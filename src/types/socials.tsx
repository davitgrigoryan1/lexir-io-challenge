import { StaticImageData } from "next/image";

export interface Socials {
  id: number;
  alt: string;
  icon: StaticImageData | string;
  href: string;
}
