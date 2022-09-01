import React from "react";
import Link from "next/link";
import { FooterMenu, FooterMenuLabels } from "src/types/footerMenu";

interface Props {
  data: FooterMenu[];
}

const FooterMenu: React.FC<Props> = ({ data }) => {
  return (
    <div className="leading-[42px] flex  font-lato font-medium max-w-[730px] w-[100%] justify-between">
      {data.map((menu: FooterMenu) => (
        <div key={menu.id}>
          <h1 className="text-secondary uppercase">{menu.title}</h1>
          <div className="flex flex-col text-[16px]">
            {menu.labels.map((label: FooterMenuLabels) => (
              <Link key={label.id} href={label.href}>
                <a>{label.title}</a>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterMenu;
