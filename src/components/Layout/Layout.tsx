import React from "react";
import Footer from "@components/Footer/index";
import Navbar from "@components/Navbar/index";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
        <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
