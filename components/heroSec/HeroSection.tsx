import React from 'react'
import Image from 'next/image'
import DropDown from './DropDown'

const HeroSection = () => {
  return (
    <div className='relative flex top-[5.5rem] left-[8.2rem] w-[1170px] h-[344px]'>
       <div className='h-[344px] flex gap-[16px]'>
       <DropDown />
       <hr className='absolute top-[9.4rem] w-[384px] right-[47rem] bg-text2 opacity-[30%] rotate-90 z-10'/>
       </div>
       <div className='w-[892px] bg-text2 flex items-center'>
            <div className='flex flex-col ml-24'>
                <div className='w-[190px] h-[49px] flex items-center gap-[8px]'>
                <Image
            src="/images/apple.png"
            alt='Apple Icon Image'
            width={200}
            height={200}
            className='w-[40px] h-[49px]' />
            <p className='font-poppins font-normal leading-6 text-text w-[126px] text-center text-sm pt-2'>iPhone 14 Series</p>
                </div>
                <div className='w-[310px] h-[120px]'>
                <p className='font-inter font-[600] leading-[55px] text-[2.8rem] pt-4 tracking-[0.2rem] text-text'>Up to 10% off Voucher</p>
                </div>
                <div className='w-[113px] h-[28px] flex gap-[8px] mt-6'>
                    <p className='font-poppins font-[500] leading-6 text-text border-b border-text text-sm'>Shop Now</p>
                    <Image
            src="/images/arrow.svg"
            alt='Arrow Image'
            width={200}
            height={200}
            className='w-[16.5px] h-[14px] mt-1 ml-1' />
                </div>
            </div>
            <Image
            src="/images/hero.png"
            alt='Hero Image'
            width={200}
            height={200}
            className='relative left-16 w-[490px] ' />
            <div className='w-[110px] h-[14px] gap-[12px] flex relative top-[9.5rem] right-[26rem]'>
            <Image
            src="/images/grayCircle.png"
            alt='Pagination Dot Image'
            width={200}
            height={200}
            className='w-[14px] h-[14px]' />
             <Image
            src="/images/grayCircle.png"
            alt='Pagination Dot Image'
            width={200}
            height={200}
            className='w-[14px] h-[14px]' />
             <Image
            src="/images/activepagination.png"
            alt='Active pagination Dot Image'
            width={200}
            height={200}
            className='w-[14px] h-[14px]' />
             <Image
            src="/images/grayCircle.png"
            alt='Pagination Dot Image'
            width={200}
            height={200}
            className='w-[14px] h-[14px]' />
             <Image
            src="/images/grayCircle.png"
            alt='Pagination Dot Image'
            width={200}
            height={200}
            className='w-[14px] h-[14px]' />
            </div>
        </div>
    </div>
  )
}

export default HeroSection