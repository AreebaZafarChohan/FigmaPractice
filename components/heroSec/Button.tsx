import Link from 'next/link';
import React from 'react'

const Button = () => {
  return (
    <div className='relative top-[68rem] left-28 w-[1170px] flex justify-center'>
    <div className='relative w-[234px] h-[56px] py-[16px] px-[48px] bg-secondary2 hover:bg-hoverButton'>
        <Link href="/wishlist" className='font-poppins font-[500] leading-6 text-text'>View All Products</Link>
    </div>
   </div>
  );
};

export default Button;