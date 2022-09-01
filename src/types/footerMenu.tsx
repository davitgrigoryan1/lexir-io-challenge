export interface FooterMenu {
  id: number;
  title: string;
  labels: FooterMenuLabels[];
}

export interface FooterMenuLabels {
  id: number;
  title: string;
  href: string;
}
