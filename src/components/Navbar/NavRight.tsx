import React from "react";
import { navigationMenu } from "src/data/navigationMenu";
import { NavigationMenu } from "src/types/navigationMenu";
import UserProfile from "./UserProfile";
import Basket from "./Basket";
import NavLink from "./NavLink";

const NavRight = () => {
  return (
    <div className="flex items-center text-[14px] text-primary">
      <nav>
        {navigationMenu.map((menu: NavigationMenu) => (
          <NavLink key={menu.id} href={menu.href} title={menu.title} />
        ))}
      </nav>
      <div className="mr-[50px] uppercase">
        <UserProfile username={"Leonardo"} />
      </div>
      <div className="uppercase">
        <Basket />
      </div>
    </div>
  );
};

export default NavRight;
