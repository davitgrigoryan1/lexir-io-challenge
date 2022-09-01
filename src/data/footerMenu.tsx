import { FooterMenu } from "src/types/footerMenu";

export const footerMenu: FooterMenu[] = [
  {
    id: 1,
    title: "Community",
    labels: [
      { id: 1, title: "Lexir for Brands", href: "/" },
      { id: 2, title: "Business Buyers", href: "/" },
      { id: 3, title: "Sales Affiliates", href: "/" },
    ],
  },
  {
    id: 2,
    title: "Platform",
    labels: [
      { id: 1, title: "Resources", href: "/" },
      { id: 2, title: "Pricing", href: "/" },
      { id: 3, title: "Get Started", href: "/" },
    ],
  },
  {
    id: 3,
    title: "Company",
    labels: [
      { id: 1, title: "About", href: "/" },
      { id: 2, title: "Contact", href: "/" },
      { id: 3, title: "Legal", href: "/" },
    ],
  },
  {
    id: 4,
    title: "Lexir Shop",
    labels: [
      { id: 1, title: "Brands", href: "/" },
      { id: 2, title: "Spirits", href: "/" },
      { id: 3, title: "Wine", href: "/" },
      { id: 4, title: "Blog", href: "/" },
    ],
  },
];
