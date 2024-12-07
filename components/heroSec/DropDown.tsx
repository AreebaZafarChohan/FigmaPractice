import React from 'react'
import { FaChevronRight } from 'react-icons/fa';

const DropDown = () => {
  return (
    <div className='w-[271px] h-[344px] flex flex-col gap-[16px] font-poppins text-text2'>
        <div className='w-[217px] h-[24px] flex gap-[51px]'>
            <p className='leading-6 font-normal'>Woman&apos;s Fashion</p>
            <FaChevronRight />
        </div>
        <div className='w-[217px] h-[24px] flex gap-[81px]'>
            <p className='leading-6 font-normal'>Men&apos;s Fashion</p>
            <FaChevronRight />
        </div>
        <p className='leading-6 font-normal'>Electronics</p>
        <p className='leading-6 font-normal'>Home & Lifestyle</p>
        <p className='leading-6 font-normal'>Medicine</p>
        <p className='leading-6 font-normal'>Sports & Outdoor</p>
        <p className='leading-6 font-normal'>Baby&apos;s & Toys</p>
        <p className='leading-6 font-normal'>Groceries & Pets</p>
        <p className='leading-6 font-normal'>Health & Beauty</p>
    </div>
  );
};

export default DropDown;