import React from "react";
import { Products } from "src/types/products";
import Product from "./Product";

interface Props {
  data: Products[];
}

const ProductContainer: React.FC<Props> = ({ data }) => {

  return (
    <div className="ml-[21px] grid grid-cols-4 gap-x-[37px] gap-y-[39px]">
      {data.map((product: Products) => (
        <Product
          title={product.title}
          category={product.category}
          price={product.price}
          currency={product.currency}
          thumbnail={product.thumbnail}
          thumbnailAlt={product.thumbnailAlt}
          width={product.width}
          height={product.height}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default ProductContainer;
