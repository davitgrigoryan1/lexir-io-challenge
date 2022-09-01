import React from "react";
import Image from "next/image";
import Link from "next/link";

const Social = ({ src, alt, href, classN }: any) => {
  return (
    <div className="flex">
        <Link href={href}>
          <a className={`cursor-pointer ${classN}`}>
            <Image src={src} alt={alt} width={18} height={18} />
          </a>
        </Link>
    </div>
  );
};

export default Social;
