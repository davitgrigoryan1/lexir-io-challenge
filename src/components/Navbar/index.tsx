import React from "react";
import Image from "next/image";
import NavLogo from "../../assets/images/navbar/logo.png";
import NavRight from "./NavRight";

const Navbar = () => {
  return (
    <header className="flex justify-center shadow-light">
      <div className="max-w-[1280px] w-[100%] flex justify-between h-[104px] items-center px-[35px]">
        <Image className="cursor-pointer" src={NavLogo} width={103} height={24} />
        <NavRight />
      </div>
    </header>
  );
};

export default Navbar;
