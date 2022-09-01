import { ProductInfo } from "src/types/productInfo";
import AboutLogo from "../assets/images/product-info/baldoria-logo.png";
import LocationIcon from "../assets/images/product-info/location.png";
import BoxIcon from "../assets/images/product-info/box.png";

export const productInfo: ProductInfo = {
  id: 1,
  image: AboutLogo,
  alt: "Baldoria Vermouth",
  title: "Baldoria Vermouth",
  description:
    "Badoria rosso is a red vermouth that balances fresh, herby bitter notes against. Kiss My Rhubarb takes its origins from an old handwritten recipe from co-creators Niels' and Wouters' rebellious grandparents.",
  location: {
    title: "Location",
    icon: LocationIcon,
    desc: "London, United Kingdom",
  },
  category: {
    title: "Product Category",
    icon: BoxIcon,
    desc: [
      { id: 1, title: "Gin" },
      { id: 2, title: "Vodka" },
    ],
  },
};
