import React from 'react'
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <footer className='relative w-[1440px] h-[440px] bg-text2 justify-center'>
        <FooterLinks />
        <div className='w-[1440px] h-[40px] flex relative top-[8rem] justify-center border-t-[0.2px] border-bg opacity-[40%] pt-5'>
            <p className='font-poppins font-normal leading-6 opacity-[40%] text-center text-bg'>&copy;Copyright Rimel 2022. All right reserved</p>
        </div>
    </footer>
  );
};

export default Footer;