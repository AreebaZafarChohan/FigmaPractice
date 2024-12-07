import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FcGoogle } from 'react-icons/fc';

const LoginComponent = () => {
  return (
    <div className='relative w-[1305px] h-[781px] flex gap-[129px] top-[7rem]'>
        <div className='w-[805px] h-[605px] rounded-tr-[4px] rounded-br-[4px] bg-[#CBE4E8] flex justify-center items-center'>
        <Image
          src="/images/signUpCart.png"
          alt='Sign Up Cart Image'
          width={600}
          height={600}
          className='' />
        </div>
        <div className='w-[371px] h-[530px] flex flex-col gap-[48px] relative top-[8rem]'>
           <div className='w-[339px] h-[78px] flex flex-col gap-[24px] mr-8'>
            <h4 className='font-inter font-[500] leading-[30px] tracking-[4%] text-text2 text-3xl'>Log in to Exclusive</h4>
            <p className='font-poppins leading-6 font-normal text-text2 text-sm'>Enter your details below</p>
           </div>
           <div className='w-[371px] h-[404px] flex flex-col'>

            <div className='flex h-[176px] w-[370px] flex-col gap-[40px]'>
              <input type="text" placeholder='Email or Phone Number' className='focus:outline-none border-b border-text2 h-[32px] placeholder:text-text2/40'/>
              <input type="password" placeholder='Password' className='focus:outline-none border-b border-text2 h-[32px] placeholder:text-text2/40'/>
            </div>

            <div className='w-[371px] h-[56px] flex pb-12 items-center gap-[87px]'>
              <button className='w-[143px] h-[56px] rounded-[4px] py-[16px] px-[48px] bg-secondary2 text-text font-poppins font-[500] leading-6 hover:bg-hoverButton'>Log in</button>
             <p className='font-poppins font-normal leading-6 text-secondary2'>Forget Password?</p>
            </div>

           </div>
        </div>
    </div>
  );
};

export default LoginComponent;