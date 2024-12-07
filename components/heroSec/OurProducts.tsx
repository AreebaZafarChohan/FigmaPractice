import React from 'react'
import Headings from '../moreReusableComponents/Headings';
import ArrowButtons from '../moreReusableComponents/ArrowButtons';
import OurProductCard from '../moreReusableComponents/OurProductCard';
import Image from 'next/image';
import OurProductCardColor from '../moreReusableComponents/OurProductCardColor';
import Link from 'next/link';

const OurProducts = () => {
  return (
    <div className='relative top-[67rem] left-[8rem] w-[1170px] h-[1016px] flex flex-col gap-[60px]'>
        <div className='h-[108px] flex gap-[672px]'>
        <Headings text='Explore Our Products' title="Our Products" />
        <ArrowButtons />
        </div>
        <div className='h-[732px] flex flex-col gap-[60px] '>
            <div className='h-[322px] flex gap-[30px]'>
            <OurProductCard name='Breed Dry Dog Food' newPrice='260' width={105} height={90} rating='65' image='DogFood' ratingImage='FiveStar' property2='-top-[17.7rem]' property='p-10' property3='bottom-12' id='12' property4='bottom-[10.4rem]'/>

            <div className='w-[270px] h-[350px] flex flex-col gap-[16px]'>
        <div className='w-[270px] h-[250px] rounded-[4px] bg-secondary justify-center items-center'>
            <div className='flex justify-center mt-8'>
                <Image 
                src="/images/DSLRCamera.png"
                alt="CANON EOS DSLR Camera"
                width={200}
                height={200}
                className="w-[146px] h-[163px]"/>
            </div>
            <div className='relative bottom-[11rem] left-[14.3rem] w-[34px] h-[76px] flex flex-col gap-[8px]'>
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
            <div className='relative -top-[3.7rem] h-[41px] rounded-r-[4px] rounded-l-[4px] bg-text2 flex justify-center items-center'>
                    <Link href={`/wishlist/id13`} className='font-poppins text-bg font-[500] leading-6 text-xl'>Add To Cart</Link>
                </div>
        </div>
        <div className='h-[84px] flex flex-col gap-[8px]'>
            <p className='h-[24px] font-poppins font-[500] leading-6 text-text2 '>CANON EOS DSLR Camera</p>
            <div className='w-[94px] h-[24px] flex gap-[8px]'>
                <p className='font-poppins font-[500] leading-6 text-secondary2'>$360</p>
                <Image
                src="/images/FourStar.png"
                alt="Rating Image - 95"
                width={100}
                height={200}
                className='w-[100px] h-[20px]'/>
                <p className='font-poppins font-[600] leading-[21px] text-text2 opacity-[50% ]'>(95)</p>
            </div>
        </div>
    </div>


            <OurProductCard name='ASUS FHD Gaming Laptop' newPrice='700' width={172} height={180} rating="325" image='Laptop' ratingImage='FiveStar' property2='-top-[12.2rem]' property='' property3='' property4='bottom-[4.7rem]' id='5'/>

            <OurProductCard name='Curology Product Set ' newPrice='500' width={172} height={159} rating='145' image='ProductSet' ratingImage='FourStar' property2='-top-[12.2rem]' property='' property3='pt-6' property4='bottom-[4.7rem]' id='14'/>
            </div>


            <div className='h-[322px] flex gap-[30px]'>
            <OurProductCardColor name='Kids Electric Car' newPrice='960' width={180} height={133} rating='65' badgeColor='button1' badgeText='New' image='KidsElectricCar' ratingImage='FiveStar' property2='-top-[13rem]' property='' property3='pt-5 pr-4' colorImage='ColourChangeCar' property4='bottom-[5.2rem]' id='15'/>

            <OurProductCardColor name='Jr. Zoom Soccer Cleats' newPrice='960' width={186} height={164} rating='35' image='Shoes' ratingImage='FiveStar' property2='-top-[13.6rem]' property='' property3='pr-4' colorImage='ColorChangeShoes' property4='bottom-[5.7rem]' id='16'/>

            <OurProductCardColor name='GP11 Shooter USB Gamepad' newPrice='660' width={178} height={150} rating='55' badgeColor='button1' badgeText='New' image='Gamepad' ratingImage='FourHalfStar' property2='-top-[13rem]' property='' property3='pr-4' colorImage='ColourChangeGamePad' property4='bottom-[4.1rem]' id='3'/>

            <OurProductCardColor name='Quilted Satin Jacket' newPrice='660' width={182} height={176} rating='55' image='Jacket' ratingImage='FourHalfStar' property2='-top-[14.7rem]' property='' property3='bottom-[1rem] pr-4' colorImage='ColourChangeJacket' property4='bottom-[5.7rem]' id='4'/>
            </div>
        </div>
    </div>
  );
};

export default OurProducts;