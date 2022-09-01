import Image from "next/image";
import React from "react";
import FooterLogo from "../../assets/images/footer/logo.png";
import FooterMenu from "./FooterMenu";
import { footerMenu } from "src/data/footerMenu";
import { socials } from "src/data/socials";
import Social from "./Social";
import Link from "next/link";
import { Socials } from "src/types/socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center bg-primary text-white">
      <div className="max-w-[1280px] w-[100%] flex flex-col p-[35px]">
        <div className="flex justify-between border-b border-white pb-[21px]">
          <div>
            <Image
              className="cursor-pointer"
              src={FooterLogo}
              width={103}
              height={24}
            />
          </div>
          <FooterMenu data={footerMenu} />
          <div className="flex justify-start">
            {socials.map((social: Socials, index: number) => (
              <Social
                src={social.icon}
                alt={social.alt}
                href={social.href}
                key={social.id}
                classN={index === socials.length - 1 ? '' : 'mr-[18px]'}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-between pt-[8px]">
          <span>© {currentYear} Lexir Inc.</span>
          <div>
            <Link href="/">
              <a className="mr-[64px]">Privacy</a>
            </Link>
            <Link href="/">
              <a>Terms of service</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
