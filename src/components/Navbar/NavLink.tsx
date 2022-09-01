import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  title: string;
  href: string;
}

const NavLink: React.FC<Props> = ({ title, href }) => {
  const router = useRouter();
  const isActive = router.pathname == href ? "text-cherry" : "";

  return (
    <>
      <Link href={href}>
        <a className={`${isActive} mr-[40px] uppercase`}>{title}</a>
      </Link>
    </>
  );
};

export default NavLink;
