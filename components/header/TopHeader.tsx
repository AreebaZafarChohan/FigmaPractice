import React from 'react'
import { FaChevronDown } from 'react-icons/fa';

export const TopHeader = () => {
  return (
    <div className='relative w-[1440px] h-[48px] bg-text2 flex justify-center pl-[19rem] font-poppins gap-[231px] text-text'>
        <div className=' relative top-3.5 h-[24px] flex gap-4 text-sm'>
            <p className='font-normal leading-[21px] text-center'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <button className='relative bottom-1 font-[600] leading-[24px]  underline'>ShopNow</button>
        </div>
        <div className='h-[24px] flex gap-2.5 relative top-3.5'>
            <p className='font-normal leading-[21px] text-[14px]'>English</p>
            <button className='text-bg h-[12.73px] relative top-[3px] '><FaChevronDown className='text-[14px]'/></button>
        </div>
    </div>
  );
};
