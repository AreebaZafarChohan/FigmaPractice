import { OurProductCardProps } from '@/types/componentTypes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ProductCard:React.FC<OurProductCardProps> = ({name, image, oldPrice, newPrice, rating, width, height, ratingImage, property, property2, property4, id}) => {
  return (
    <div key={id} className='w-[270px] h-[350px] flex flex-col gap-[16px]'>
        <div className='w-[270px] h-[250px] rounded-[4px] bg-secondary justify-center items-center'>
            <div className='flex justify-center mt-8'>
                <Image 
                src={`/images/${image}.png`}
                alt="Game Remote Image"
                width={200}
                height={200}
                className={`w-[${width}px] h-[${height}px] ${property}`}
                />
            </div>
            <div className={`relative bottom-[10rem] ${property2} left-[14.3rem] w-[34px] h-[76px] flex flex-col gap-[8px]`}>
                <div className='w-[34px] h-[34px] bg-bg rounded-full flex justify-center items-center'>
                <Image
            src="/images/heart.svg"
            alt='Heart Icon Image'
            width={200}
            height={200}
            className='p-2' />
                </div>
                <div className='w-[34px] h-[34px] bg-bg rounded-full flex justify-center items-center'>
                <Image
            src="/images/eye.svg"
            alt='Eye Icon Image'
            width={200}
            height={200}
            className='p-2' />
                </div>
            </div>

            <div className={`relative ${property4} h-[41px] rounded-r-[4px] rounded-l-[4px] bg-secondary hover:bg-text2 flex justify-center transition-all duration-300 ease-in-out items-center text-secondary hover:text-bg`}>
                    <Link href={`/wishlist/id${id}`}
                     className='font-poppins font-[500] leading-6 text-xl'>Add To Cart</Link>
                </div>
        </div>
        <div className='h-[84px] flex flex-col gap-[8px]'>
            <p className='h-[24px] font-poppins font-[500] leading-6 text-text2 '>{name}</p>
            <div className='w-[94px] h-[24px] flex gap-[12px]'>
                <p className='font-poppins font-[500] leading-6 text-secondary2'>${newPrice}</p>
                <p className='opacity-[50%] font-poppins font-[500] leading-6 text-text2' style={{textDecoration: 'Strikethrough'}}>${oldPrice}</p>
            </div>
            <div className='w-[140px] h-[20px] flex gap-[8px]'>
                <Image 
                src={`/images/${ratingImage}.png`}
                alt={`Rating Image - ${rating}`}
                width={100}
                height={200}
                className='w-[100px] h-[20px]'/>
                <p className='font-poppins font-[600] leading-[21px] text-text2 opacity-[50% ]'>{`(${rating})`}</p>
            </div>
        </div>
    </div>
  );
};

export default ProductCard;