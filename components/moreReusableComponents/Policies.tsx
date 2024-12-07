import Image from 'next/image';
import React from 'react'

const Policies = () => {
  return (
    <div className='relative top-[90rem] left-[14rem] w-[943px] h-[161px] grid grid-cols-3 gap-[88px]'>
        <div className='w-[249px] h-[161px] flex flex-col gap-[24px] justify-center items-center'>
            <Image
            src="/images/Delivery.png"
            alt='Delivery Icon Image'
            width={200}
            height={200}
            className='w-[80px] h-[80px]' />

            <div className='w-[249px] h-[57px] flex flex-col gap-[8px]'>
                <p className='font-poppins font-[600] leading-[28px] text-text2 text-xl'>FREE AND FAST DELIVERY</p>
                <p className='font-poppins font-normal leading-[21px] text-[0.795rem] text-text2'>Free delivery for all orders over $140</p>
            </div>
        </div>


        <div className='w-[249px] h-[161px] flex flex-col gap-[24px] justify-center items-center'>
            <Image
            src="/images/Services.png"
            alt='Services Icon Image'
            width={200}
            height={200}
            className='w-[80px] h-[80px]' />

            <div className='w-[249px] h-[57px] flex flex-col gap-[8px]'>
                <p className='font-poppins font-[600] leading-[28px] text-text2 text-xl'>24/7 CUSTOMER SERVICE</p>
                <p className='font-poppins font-normal leading-[21px] text-[0.795rem] pl-4 text-text2'>Friendly 24/7 customer support</p>
            </div>
        </div>


         <div className='w-[249px] h-[161px] flex flex-col gap-[24px] justify-center items-center'>
            <Image
            src="/images/MoneyBack.png"
            alt='MONEY BACK GUARANTEE Icon Image'
            width={200}
            height={200}
            className='w-[80px] h-[80px]' />

            <div className='w-[309px] h-[57px] flex flex-col gap-[8px]'>
                <p className='font-poppins font-[600] leading-[28px] text-text2 text-xl'>MONEY BACK GUARANTEE</p>
                <p className='font-poppins font-normal leading-[21px] text-[0.795rem] text-text2 pl-6'>We reurn money within 30 days</p>
            </div>
        </div>
    </div>
  );
};

export default Policies;