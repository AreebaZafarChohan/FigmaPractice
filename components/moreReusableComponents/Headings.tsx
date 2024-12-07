import Image from "next/image";
import React from "react";

const Headings = ({title, text}: {title: string; text: string;}) => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="w-[150px] h-[40px] flex gap-[16px]">
        <Image
        src="/images/Rectangle.svg"
        alt="Rectangle"
        width={100}
        height={100}
        className="w-[20px] h-[40px]" />
        <p className="font-poppins font-[600] leading-[20px] text-secondary2 pt-3 text-[14px] ">
          {title}
        </p>
      </div>
      <h4 className="font-inter font-[600] leading-[48px] text-text2 tracking-[4%] text-4xl">
        {text}
      </h4>
    </div>
  );
};

export default Headings;
