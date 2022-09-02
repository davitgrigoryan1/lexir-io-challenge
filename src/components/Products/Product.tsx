import Image from "next/image";
import React from "react";
import { getCurrency } from "../../shared/helpers";
import { useDispatch } from "react-redux";
import { addToBasket } from "src/redux/slice/basketSlice";
import { Products } from "src/types/products";

const Product: React.FC<Products> = ({
  title,
  category,
  price,
  currency,
  thumbnail,
  thumbnailAlt,
  width,
  height
}) => {
  const dispatch = useDispatch();

  return (
    <div className="shadow-light">
      <div className="bg-borderColor py-[20px] px-[40px] flex justify-center items-center h-[232px]">
        <Image src={thumbnail} alt={thumbnailAlt} width={width} height={height}/>
      </div>
      <div className="bg-white p-[10px]">
        <div>
          <div className="font-lato uppercase flex justify-between items-center mb-[9px]">
            <span className="font-bold text-primary text-[14px]">{title}</span>
            <span className="text-primary2-300 text-[15px]">
              {price}
              {getCurrency(currency)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="uppercase text-secondary font-bold font-lato">
              {category}
            </span>
            <span
              className="cursor-pointer bg-borderColor w-[19px] h-[19px] flex justify-center items-center rounded-[4px]"
              onClick={() => dispatch(addToBasket())}
            >
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Product);
