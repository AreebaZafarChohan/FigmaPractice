"use client";
import Navbar from './Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { HiOutlineStar } from 'react-icons/hi';
import { LiaTimesCircle } from 'react-icons/lia';
import { LuUser } from 'react-icons/lu';
import { TbLogout2 } from 'react-icons/tb';


const Header = () => {

  const [dropDown, setIsDropDown] = useState(false);

  const handleUserDropDown = () => {
    setIsDropDown(!dropDown);
  }


  return (
    <div className='relative max-w-[1440px] lg:w-[1440px]'>
        <div className='relative top-[35px] left-[135px] flex justify-center items-center gap-[190px] w-[1170px] h-[38px]'>
        <div className='w-[118px] h-[24px]'>
            <p className='font-inter font-bold leading-6 tracking-[3%] text-2xl'>Exclusive</p>
        </div>
       <Navbar />
        <div className='h-[38px] flex gap-[8px]'>
           <div className='rounded-[4px] py-[7px] pl-[20px] pr-[12px] bg-secondary flex items-center justify-center'>
          <div>
          <label htmlFor="search"></label>
          <input type="search" name="search" id="search" placeholder='What are you looking for?' className='placeholder:font-poppins placeholder:font-normal placeholder:leading-[18px] bg-transparent h-10 placeholder:text-[13px] w-[153px]'/>
          </div>
           <Image
                src="/images/search.svg"
                alt='Search Image'
                width={100}
                height={100}
                className='w-[16px] h-[16px] text-text2'/>
           </div>
           <div className='w-[120px] h-[32px] flex gap-3 items-center mt-1'>
            <Link href="/wishlist" className='w-[32px] h-[32px]text-text2'>
            <Image
                src="/images/Wishlist.svg"
                alt='Wishlist Image'
                width={100}
                height={100}
                className='w-[32px] h-[32px]'/>
            </Link>

            <Link href="/usercart" className='w-[32px] h-[32px] text-text2'>
                <Image
                src="/images/cart.svg"
                alt='Cart Image'
                width={100}
                height={100}
                className='w-[32px] h-[32px]'/>
            </Link>
            <button
              onClick={handleUserDropDown}
              className={`w-[28px] h-[28px] rounded-full border border-transparent ${
                dropDown ? "bg-secondary2  border-secondary2 text-text" : "bg-transparent hover:text-text hover:border-secondary2 text-text2 hover:bg-secondary2"
              }`}
            >
              <LuUser className="text-[1.5rem] pl-0.5" />
            </button>
           </div>
        </div>
    </div>
    <hr className='relative top-12 bg-black'/>

    {/* Dropdown Menu */}
    {dropDown && (
        <div className="absolute top-[76px] right-[150px] w-[225px] bg-black/70 h-[208px] bg-opacity-70 backdrop-blur-3xl shadow-lg rounded-lg z-50">
          <ul className="flex flex-col p-4 gap-4">
            <li className="flex items-center gap-2 text-text border-b border-transparent hover:border-text font-poppins font-[300] leading-[21px]">
              <LuUser className='w-[20px] h-[20px]'/> Manage My Account
            </li>
            <li className="flex items-center gap-2 text-text border-b border-transparent hover:border-text font-poppins font-[300] tracking-[0.03rem] leading-[21px]">
            <FiShoppingBag className='w-[20px] h-[20px]'/> My Orders
            </li>
            <li className="flex items-center gap-2 text-text border-b border-transparent hover:border-text font-poppins font-[300] tracking-[0.03rem] leading-[21px]">
            <LiaTimesCircle className='w-[20px] h-[20px]'/> My Cancellations
            </li>
            <li className="flex items-center gap-2 text-text border-b border-transparent hover:border-text font-poppins font-[300] tracking-[0.03rem]leading-[21px]">
            <HiOutlineStar className='w-[20px] h-[20px]'/> My Reviews
            </li>
            <li className="flex items-center gap-2 text-text border-b border-transparent hover:border-text font-poppins font-[300] tracking-[0.03rem] leading-[21px] ">
            <TbLogout2 className='w-[20px] h-[20px]'/> Logout
            </li>
          </ul>
        </div>
      )}

    </div>
  );
};

export default Header;