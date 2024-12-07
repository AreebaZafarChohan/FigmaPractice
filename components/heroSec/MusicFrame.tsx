import Image from 'next/image';
import React from 'react'
import RoundTimer from '../moreReusableComponents/RoundTimer';
import Link from 'next/link';

const MusicFrame = () => {
  return (
    <div className='relative top-[55rem] left-[8rem] w-[1170px] h-[500px] bg-text2 flex justify-center items-center'>
        <div className='flex flex-col gap-8 pl-20'>
            <p className='text-button1 font-poppins leading-[20px] font-[600] text-sm'>Categories</p>
            <h5 className='w-[443px] h-[120px] font-inter font-[600] leading-[60px] tracking-[0.2rem] text-text text-5xl'>Enhance Your Music Experience</h5>
            <div className='w-[320px] h-[62px] flex gap-[24px] '>
               <RoundTimer text='Days' time='05' property='pl-[1.2rem]'/> 

               <RoundTimer text='Hours' time='23' property='pl-4'/> 

               <RoundTimer text='Minutes' time='59'property='pl-[0.65rem]'/> 

               <RoundTimer text='Seconds' time='35' property='pl-[0.65rem]'/> 
            </div>
            <button className='w-[171px] h-[56px] py-[16px] px-[48px] bg-button1'><Link href="/wishlist" className='font-poppins font-[500] leading-6 text-text mt-4'>Buy Now</Link></button>
        </div>
        <div className=' h-[420px] rounded-full flex justify-normal items-center'>
        <Image
            src="/images/Ellipse.png"
            alt='Ellipse Image'
            height={200}
            width={200}
            className='relative w-[800px] h-[500px] right-[5rem]'/>
            <Image
            src="/images/musicImage.png"
            alt='Music Radio Image'
            height={200}
            width={200}
            className='relative right-[40rem] w-[568px] h-[330px] z-10'/>
        </div>
    </div>
  );
};

export default MusicFrame;