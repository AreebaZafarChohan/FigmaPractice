import { NavBarLiProps } from '@/types/componentTypes';
import Link from 'next/link';
import React from 'react'

const NavbarLi: React.FC<NavBarLiProps> = ({link, name}) => {
  return (
    <li className='h-[24px] font-poppins font-normal leading-6 text-text2 border-b border-transparent transition-all duration-300 ease-in-out hover:border-black'>
        <Link href={link} >{name}</Link>
    </li>
  );
};

export default NavbarLi;