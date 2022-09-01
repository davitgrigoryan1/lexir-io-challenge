import React from "react";
import Image from "next/image";
import { ProductInfo } from "src/types/productInfo";

interface Props {
  data: ProductInfo;
}

const ProductInfo: React.FC<Props> = ({ data }) => {
  return (
    <div className="px-[42px] pt-[20px] pb-[46px] border-[1px] w-[100%] border-borderColor h-max max-w-[379px]">
      <div className="flex flex-col justify-center items-center">
        <Image
          className=""
          src={data.image}
          alt={data.alt}
          width={215}
          height={76}
        />
        <div>
          <h1
            style={{ fontFamily: "Source Serif" }}
            className="font-bold text-[34px] mt-[66px] leading-[112%] mb-[18px]"
          >
            {data.title}
          </h1>
          <span className="font-lato font-normal mt-[18px]">
            {data.description}
          </span>
        </div>
        <button className="text-neutral-500 font-lato font-bold mt-[32px]">
          Read More
        </button>
      </div>
      <div className="mt-[64px]">
        <div className="flex items-start pb-5">
          <div className="mt-[5px]">
            <Image src={data.location.icon} alt="Location Icon" />
          </div>
          <div className="ml-[18px]">
            <div className="font-lato leading-[25px] text-[16px]">
              {data.location.title}
            </div>
            <div className="leading-[35px] text-[22px] font-normal text-locationGray">
              {data.location.desc}
            </div>
          </div>
        </div>
        <div className="flex items-start pb-5">
          <div className="mt-[5px]">
            <Image src={data.category.icon} alt="Box Icon" />
          </div>
          <div className="ml-[18px]">
            <div className="font-lato leading-[25px] text-[16px]">
              {data.category.title}
            </div>
            <div className="flex gap-2 mt-2">
              {data.category.desc.map((category: any) => (
                <span
                  key={category.id}
                  className="px-[24px] leading-[35px] mr-[8px] text-locationGray"
                >
                  {category.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
