import React from 'react'
import Headings from '../moreReusableComponents/Headings';
import ArrowButtons from '../moreReusableComponents/ArrowButtons';
import CategoryCard from '../moreReusableComponents/CategoryCard';
import Image from 'next/image';

const Category = () => {
  return (
    <div className='relative top-[27rem] left-[8.7rem] w-[1170px] h-[313px] flex flex-col gap-[60px] '>
        <div className='w-[1170px] h-[108px] flex gap-[691px] '>
            <Headings text='Browse By Category' title="Categories" />
            <ArrowButtons />
        </div>
        <div className='h-[145px] flex gap-[30px]'>
            <CategoryCard name='Phones'/>
            <CategoryCard name='Computers'/>
            <CategoryCard name='SmartWatch'/>

            <div className='w-[170px] h-[145px] border rounded-[4px] border-secondary2 border-opacity-[30%] flex flex-col justify-center items-center bg-secondary2 gap-4'>
        <Image
        src="/images/Camera.png"
        alt="Camera Image" 
        width={100}
        height={100}
        className='w-[56px] h-[56px]'/>
        <p className='font-poppins font-normal leading-6 text-bg'>Camera</p>
    </div>
            <CategoryCard name='HeadPhones'/>
            <CategoryCard name='Gaming'/>
        </div>

        <hr className='mt-8 '/>
    </div>
  );
};

export default Category;