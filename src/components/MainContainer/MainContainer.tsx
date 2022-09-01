import Head from "next/head";
import React from "react";

interface Props {
  children: React.ReactNode;
  title: string;
  content: string;
}

const MainContainer: React.FC<Props> = ({ children, title, content }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center w-[100%]">{children}</div>
    </>
  );
};

export default MainContainer;
