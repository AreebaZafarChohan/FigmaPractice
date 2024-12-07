import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Headings from '../moreReusableComponents/Headings';

const NewArrival = () => {
  return (
    <div className='relative top-[75rem] left-[8rem] w-[1170px] h-[768px] flex flex-col gap-[60px] '>
        <div className='w-[216px] h-[108px] flex flex-col gap-[20px]'>
            <Headings text='New Arrival' title='Featured'/>
        </div>
        <div className='w-[1170px] h-[600px] flex gap-[30px]'>
            <div className='w-[570px] h-[600px] rounded-[4x] bg-text2 '>
                <Image
                src="/images/playStation5.png"
                alt='Play Station 5 Image'
                width={200}
                height={200}
                className='relative w-[511px] h-[511px] top-[5.57rem] left-[2rem]' />
                <div className='relative bottom-[4.5rem] left-10 w-[242px] h-[122px] flex flex-col gap-[16px] z-10'>
                    <h5 className='font-inter font-[600] leading-6 tracking-[0.1rem] text-text text-2xl'>Play Station 5</h5>
                    <p className='font-poppins font-[300] leading-[21px] text-text text-sm'>Black and White version of the PS5 coming out on sale.</p>
                    <button className='w-[81px] h-[24px]'><Link href="/wishlist" className='font-poppins font-[500] leading-6 border-b border-bg text-bg'>Shop Now</Link></button>
                </div>
            </div>

            <div className='w-[570px] h-[600px] flex flex-col gap-[32px]'>
                <div className='w-[570px] h-[284px] rounded-[4px] bg-[#0D0D0D] flex'>
                <div className='absolute top-[19rem] ml-6 z-10 h-[122px] flex flex-col gap-[16px]'>
                <h5 className='font-inter font-[600] leading-6 tracking-[0.1rem] text-text text-2xl'>Women&apos;s Collections</h5>
                    <p className='font-poppins font-[300] leading-[21px] text-text text-sm'>Featured woman collections that <br /> give you another vibe.</p>
                    <button className='w-[81px] h-[24px]'><Link href="/wishlist" className='font-poppins font-[500] leading-6 border-b border-bg text-bg'>Shop Now</Link></button>
                </div>
                <Image
                src="/images/womensCollection.png"
                alt='Womens Collection Image'
                width={200}
                height={200}
                className='relative left-[8rem] w-[432px] h-[284px]' />
                </div>
                <div className='w-[570px] h-[284px] flex gap-[30px] justify-center'>
                    <div className='w-[270px] h-[284px] rounded-[4px] flex flex-col justify-center items-center' style={{background: "radial-gradient(ellipse, rgba(0,0,0,0.8), rgba(0,0,0,0.9) )"}}>
                    <Image
                src="/images/Speakers.png"
                alt='Speakers Image'
                width={200}
                height={200}
                className='w-[190px] h-[221px]' />

<div className='absolute -bottom-2 ml-6 w-[242px] h-[122px] flex flex-col gap-[8px] z-10'>
                    <h5 className='font-inter font-[600] leading-6 tracking-[0.1rem] text-text text-2xl'>Speakers</h5>
                    <p className='font-poppins font-[300] leading-[21px] text-text text-sm'>Amazon wireless speakers</p>
                    <button className='w-[81px] h-[24px]'><Link href="/wishlist" className='font-poppins font-[500] leading-6 border-b border-bg text-bg'>Shop Now</Link></button>
                </div>

                    </div>
                    <div className='w-[270px] h-[284px] rounded-[4px] flex justify-center items-center flex-col' style={{background: "radial-gradient(ellipse, rgba(0,0,0,0.8), rgba(0,0,0,0.9) )"}}>

                    <Image
                src="/images/Perfume.png"
                alt='Perfume Image'
                width={200}
                height={200}
                className='w-[201px] h-[203px]' />
                <div className='absolute -bottom-2 ml-6 w-[242px] h-[122px] flex flex-col gap-[8px] z-10'>
                    <h5 className='font-inter font-[600] leading-6 tracking-[0.1rem] text-text text-2xl'>Perfume</h5>
                    <p className='font-poppins font-[300] leading-[21px] text-text text-sm'>GUCCI INTENSE OUD EDP</p>
                    <button className='w-[81px] h-[24px]'><Link href="/wishlist" className='font-poppins font-[500] leading-6 border-b border-bg text-bg'>Shop Now</Link></button>
                </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
  );
};

export default NewArrival;