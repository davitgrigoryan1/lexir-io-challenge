import React from "react";
import Image from "next/image";
import BasketIcon from "../../assets/images/navbar/basket.png";
import { useSelector } from "react-redux";

const Basket = () => {
  const basketCount = useSelector((state: Record<string, any>) => state.basket.basketCount);

  return (
    <div className="flex items-center">
      <div className="relative">
        <Image src={BasketIcon} height={16} width={20} />
        {basketCount ? (
          <span className="flex w-[14px] h-[14px] bg-neutral-500 rounded-full border-2 border-white justify-center items-center absolute text-white text-[10px] top-[-5px] right-[-5px]">
            {basketCount}
          </span>
        ) : (
          ""
        )}
      </div>
      <span className="ml-[9px] cursor-pointer">Cart</span>
    </div>
  );
};

export default Basket;
