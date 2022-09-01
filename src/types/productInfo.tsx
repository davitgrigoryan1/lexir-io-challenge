import { StaticImageData } from "next/image";

export interface ProductInfo {
  id: number;
  image: StaticImageData | string;
  alt: string;
  title: string;
  description: string;
  location: ProductLocation;
  category: ProductCategory;
}

interface ProductLocation {
  title: string;
  desc: string;
  icon: StaticImageData | string;
}

interface ProductCategory {
  title: string;
  desc: ProductCategoryDesc[];
  icon: StaticImageData | string;
}

interface ProductCategoryDesc {
  id: number;
  title: string;
}
