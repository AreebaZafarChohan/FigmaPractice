import React from 'react'
import Headings from '../moreReusableComponents/Headings';
import Link from 'next/link';
import ProductCard from '../moreReusableComponents/ProductCard';

const BestSellingProducts = () => {
  return (
    <div className='relative top-[40rem] left-[8rem] w-[1170px] h-[518px] flex flex-col gap-[60px]'>
        <div className='h-[108px] flex '>
          <div className='flex'>
          <Headings title='This Month' text='Best Selling Products'/>
          </div>
            <div className='relative h-[56px] py-4 px-10 bg-secondary2 top-9 left-[42rem]  hover:bg-hoverButton'>
        <Link href="/wishlist" className='font-poppins font-[500] leading-6 text-text'>View All</Link>
    </div>
        </div>
        <div className='w-[1170px] h-[350px] flex gap-[30px]'>
            <ProductCard name='The north coat' oldPrice='360' newPrice='260' width={140} height={146} rating={65} image='northCoat' ratingImage='FiveStar' property='' property4='bottom-[2.8rem]' id='10'/>

            <ProductCard name='Gucci duffle bag' oldPrice='1160' newPrice='960' width={178} height={129} rating={65} image='bag' ratingImage='FourHalfStar' property='mt-4' property2='bottom-[10.9em]' property4='bottom-[3.7rem]' id='1'/>

            <ProductCard name='RGB liquid CPU Cooler' oldPrice='170' newPrice='160' width={191} height={92} rating={65} image='CPUCooler' ratingImage='FourHalfStar' property='mt-14' property2='bottom-[10.2em]' property4='bottom-[3.1rem]' id='2'/>

            <ProductCard name='Small BookSelf' oldPrice='400' newPrice='360' width={140} height={176} rating={65} image='BookSelf' ratingImage='FiveStar' property2='bottom-[11.8em]' property4='bottom-[4.5rem]' id='11'/>
        </div>
    </div>
  );
};

export default BestSellingProducts;