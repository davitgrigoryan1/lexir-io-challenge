import MainContainer from "@components/MainContainer/MainContainer";
import ProductInfo from "@components/ProductInfo/index";
import ProductContainer from "@components/Products/ProductContainer";
import { productInfo } from "src/data/productInfo";
import { Products } from "src/types/products";

import axios from "axios";
import { GetServerSideProps } from "next/types";

interface Props {
  products: Products[];
}

export default function Home({ products }: Props) {
  return (
    <MainContainer
      content={"Lexir Frontend Assessment!"}
      title={"Lexir Frontend Assessment!"}
    >
      <div className="max-w-[1280px] w-[100%] my-[40px] flex px-[35px]">
        <ProductInfo data={productInfo} />
        <ProductContainer data={products} />
      </div>
    </MainContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const host = req.headers.host;

  let products;

  try {
    const { data } = await axios.get(`http://${host}/api/products`);
    products = data;
  } catch (e) {
    products = [];
    if (typeof e === "string") {
      console.log(e.toUpperCase());
    } else if (e instanceof Error) {
      console.log(e.message);
    }
  }

  return {
    props: {
      products,
    },
  };
}
