"use client";
import { ProductDetailProps } from '@/types/componentTypes';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ProductCard from '../moreReusableComponents/ProductCard';

export async function getData() {
    const response = await fetch("/api/details");
    const data = await response.json();
    return data;
  }


const WishListProductDetails = () => {

    const params = useParams();
  const id = params.id;
  const productId = id;

  const [details, setDetails] = useState<ProductDetailProps | null>(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const productData = await getData();
      const productDetails = productData.find(
        (item: ProductDetailProps) => item.id === productId

      );
      setDetails(productDetails);
      console.log("product Details", productId, id, productDetails);
    };

    fetchProductDetails();
  }, [productId]);

  return (
    <div className='relative top-[10rem] w-[1170px] mx-[7rem] mb-[16rem]'>
        <div className='w-[353px] h-[21px] flex gap-[12px]'>
            <p className='font-poppins font-normal leading-[21px] text-text2 opacity-[50%]'>{`Account / ${details?.category} / ${details?.name}`}</p>
        </div>

        {
            details && (
        <div className='w-[1170px] h-[600px] flex gap-[4rem] mt-[6rem]'>
                <div className='flex flex-col gap-[2rem]'>
                <Image 
                src={`/images/${details.image}.png`}
                alt={details.name}
                width={200}
                height={200}
                className='w-[170px] h-[128px] rounded-[4px] bg-secondary p-3'/>

<Image 
                src={`/images/${details.image}.png`}
                alt={details.name}
                width={200}
                height={200}
                className='w-[170px] h-[128px] rounded-[4px] bg-secondary p-3'/>

<Image 
                src={`/images/${details.image}.png`}
                alt={details.name}
                width={200}
                height={200}
                className='w-[170px] h-[128px] rounded-[4px] bg-secondary p-3'/>

<Image 
                src={`/images/${details.image}.png`}
                alt={details.name}
                width={200}
                height={200}
                className='w-[170px] h-[128px] rounded-[4px] bg-secondary p-3'/>
            </div>
            <div className='rounded-[4px] bg-secondary w-[500px] h-[600px]'>
            <Image 
                src={`/images/${details.image}.png`}
                alt={details.name}
                width={200}
                height={200}
                className='w-full h-full py-[7rem] px-[1rem]'/>
            </div>

            <div className='flex flex-col gap-[2rem]'>
                <h3 className='w-[304px] h-[24px] font-inter font-[600] leading-6 tracking-[0.1] text-text2 text-2xl '>{details.name}</h3>
                <div className='w-[290px] h-[21px] flex gap-[8px]'>
                    <Image
                    src="/images/FourStar.png"
                    alt='Rating Image'
                    width={200}
                    height={200}
                    className='w-[100px] h-[20px]' />
                    <p className='w-[110px] h-[21px] font-poppins leading-[21px] font-normal text-text2 opacity-[50%] text-sm'>(150 Reviews) &nbsp;|</p>
                    <p className='font-poppins leading-[21px] font-normal text-button1 opacity-[60%] text-sm'>In Stock</p>
                </div>
            <p className='font-inter font-normal leading-6 text-text2 text-2xl'>${details.price}</p>
            <p className='w-[373px] h-[63px] font-poppins font-normal leading-[21px] text-text2'>{details.desc}</p>
            <hr className='bg-black'/>
            <div className='w-[155px] h-[20px] flex gap-[24px]'>
                <p className='font-inter font-normal leading-[20px]'>Colors:</p>
                <Image
                src="/images/detailsPageColorChange.png"
                alt='Colors'
                width={200}
                height={200}
                className='w-[48px] h-[20px]' />
            </div>

            <Image
                src="/images/size.png"
                alt='Sizes'
                width={200}
                height={200}
                className='w-[296px] h-[32px]' />
                <div className='flex gap-1'>
                <Image
                src="/images/counter.png"
                alt='Counter'
                width={200}
                height={200}
                className='w-[159px] h-[44px]' />
                <Image
                src="/images/buynow.png"
                alt='Buy now'
                width={200}
                height={200}
                className='w-[165px] h-[44px]' />
                <Image
                src="/images/detailIconHeart.png"
                alt='Heart Icon'
                width={200}
                height={200}
                className='w-[40px] h-[40px]' />
                </div>

                <Image
                src="/images/deliveryandReturn.png"
                alt='Return and Delivery'
                width={200}
                height={200}
                className='w-[399px] h-[180px]' />
        </div>
        </div>
)
}
        <div className='w-[1170px] h-[450px] flex flex-col mt-[10rem] gap-[60px]'>
        <div className="w-[150px] h-[40px] flex gap-[16px]">
        <Image
        src="/images/Rectangle.svg"
        alt="Rectangle"
        width={100}
        height={100}
        className="w-[20px] h-[40px]" />
        <p className="font-poppins font-[400] leading-[26px] text-secondary2 pt-3">
          Just For You
        </p>
      </div>


      <div className='w-[1170px] h-[350px] flex gap-[30px]'>
      <div className='w-[270px] h-[350px] flex flex-col gap-[16px]'>
        <div className='w-[270px] h-[250px] rounded-[4px] bg-secondary justify-center items-center'>
            <div className='relative top-2 left-3 w-[55px] h-[26px] py-[4px] px-[12px] rounded-[4px] bg-secondary2'>
                <p className='font-poppins font-normal leading-[18px] text-text text-xs'>-40%</p>
            </div>
            <div className='flex justify-center mt-8'>
                <Image 
                src='/images/gameRemote.png'
                alt="Game Remote Image"
                width={200}
                height={200}
                className="w-[172px] h-[152px]"
                />
            </div>
            <div className='relative bottom-[12rem] left-[14.3rem] w-[34px] h-[76px] flex flex-col gap-[8px]'>
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
            <div className='relative bottom-[4.6rem] h-[41px] rounded-r-[4px] rounded-l-[4px] bg-secondary hover:bg-text2 flex justify-center transition-all duration-300 ease-in-out items-center text-secondary hover:text-bg'>
                    <Link href={`/wishlist/id8`}
                     className='font-poppins font-[500] leading-6 text-xl'>Add To Cart</Link>
                </div>
        </div>
        <div className='h-[84px] flex flex-col gap-[8px]'>
            <p className='h-[24px] font-poppins font-[500] leading-6 text-text2 '>HAVIT HV-G92 Gamepad</p>
            <div className='w-[94px] h-[24px] flex gap-[12px]'>
                <p className='font-poppins font-[500] leading-6 text-secondary2'>$120</p>
                <p className='opacity-[50%] font-poppins font-[500] leading-6 text-text2' style={{textDecoration: 'Strikethrough'}}>$160</p>
            </div>
            <div className='w-[140px] h-[20px] flex gap-[8px]'>
                <Image 
                src={`/images/FiveStar.png`}
                alt={`Rating Image - 88`}
                width={100}
                height={200}
                className='w-[100px] h-[20px]'/>
                <p className='font-poppins font-[600] leading-[21px] text-text2 opacity-[50% ]'>(88)</p>
            </div>
        </div>
    </div>

      <div className='w-[270px] h-[350px] flex flex-col gap-[16px]'>
        <div className='w-[270px] h-[250px] rounded-[4px] bg-secondary justify-center items-center'>
            <div className='relative top-2 left-3 w-[55px] h-[26px] py-[4px] px-[12px] rounded-[4px] bg-secondary2'>
                <p className='font-poppins font-normal leading-[18px] text-text text-xs'>-35%</p>
            </div>
            <div className='flex justify-center mt-8'>
                <Image 
                src="/images/keyboard.png"
                alt="AK-900 Wired Keyboard"
                width={200}
                height={200}
                className="w-[191px] h-[101px]"/>
            </div>
            <div className='relative bottom-[9rem] left-[14.3rem] w-[34px] h-[76px] flex flex-col gap-[8px]'>
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
            <div className='relative -top-6 h-[41px] rounded-r-[4px] rounded-l-[4px] bg-text2 flex justify-center items-center'>
                    <Link href={`/wishlist/id7`}
                     className='font-poppins text-bg font-[500] leading-6 text-xl'>Add To Cart</Link>
                </div>
        </div>
        <div className='h-[84px] flex flex-col gap-[8px]'>
            <p className='h-[24px] font-poppins font-[500] leading-6 text-text2 '>AK-900 Wired Keyboard</p>
            <div className='w-[94px] h-[24px] flex gap-[12px]'>
                <p className='font-poppins font-[500] leading-6 text-secondary2'>$960</p>
                <p className='opacity-[50%] font-poppins font-[500] leading-6 text-text2' style={{textDecoration: 'Strikethrough'}}>$1160</p>
            </div>
            <div className='w-[140px] h-[20px] flex gap-[8px]'>
                <Image 
                src="/images/FourStar.png"
                alt="Rating Image - 75"
                width={100}
                height={200}
                className='w-[100px] h-[20px]'/>
                <p className='font-poppins font-[600] leading-[21px] text-text2 opacity-[50% ]'>(75)</p>
            </div>
        </div>
    </div>

    <div className='w-[270px] h-[350px] flex flex-col gap-[16px]'>
        <div className='w-[270px] h-[250px] rounded-[4px] bg-secondary justify-center items-center'>
            <div className='relative top-2 left-3 w-[55px] h-[26px] py-[4px] px-[12px] rounded-[4px] bg-secondary2'>
                <p className='font-poppins font-normal leading-[18px] text-text text-xs'>-30%</p>
            </div>
            <div className='flex justify-center mt-8'>
                <Image 
                src='/images/gamingMonitor.png'
                alt="Game Remote Image"
                width={200}
                height={200}
                className="w-[170px] h-[129  px]"
                />
            </div>
            <div className='relative bottom-[10.6rem] left-[14.3rem] w-[34px] h-[76px] flex flex-col gap-[8px]'>
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

            <div className='relative bottom-[3.4rem] h-[41px] rounded-r-[4px] rounded-l-[4px] bg-secondary hover:bg-text2 flex justify-center transition-all duration-300 ease-in-out items-center text-secondary hover:text-bg'>
                    <Link href={`/wishlist/id6`}
                     className='font-poppins font-[500] leading-6 text-xl'>Add To Cart</Link>
                </div>
        </div>
        <div className='h-[84px] flex flex-col gap-[8px]'>
            <p className='h-[24px] font-poppins font-[500] leading-6 text-text2 '>IPS LCD Gaming Monitor </p>
            <div className='w-[94px] h-[24px] flex gap-[12px]'>
                <p className='font-poppins font-[500] leading-6 text-secondary2'>$370</p>
                <p className='opacity-[50%] font-poppins font-[500] leading-6 text-text2' style={{textDecoration: 'Strikethrough'}}>$400</p>
            </div>
            <div className='w-[140px] h-[20px] flex gap-[8px]'>
                <Image 
                src={`/images/FiveStar.png`}
                alt={`Rating Image - 99`}
                width={100}
                height={200}
                className='w-[100px] h-[20px]'/>
                <p className='font-poppins font-[600] leading-[21px] text-text2 opacity-[50% ]'>(99)</p>
            </div>
        </div>
    </div>

    <ProductCard name='RGB liquid CPU Cooler' oldPrice='170' newPrice='160' width={191} height={92} rating={65} image='CPUCooler' ratingImage='FourHalfStar' property='mt-14' property2='bottom-[10.2em]' property4='bottom-[3.1rem]' id='2'/>

        </div>
    </div>
    </div>
  );
};

export default WishListProductDetails;