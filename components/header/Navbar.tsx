import React from 'react'
import NavbarLi from './NavbarLi';

const Navbar = () => {
  return (
    <div className=' h-[24px]'>
           <ul className='flex gap-[32px] '>
            <NavbarLi link='/' name='Home'/>
            <NavbarLi link='/contact' name='Contact'/>
            <NavbarLi link='/about' name='About'/>
            <NavbarLi link='/signup' name='Sign Up'/>
            </ul> 
        </div>
  );
};

export default Navbar;