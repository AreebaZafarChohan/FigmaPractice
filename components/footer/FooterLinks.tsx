import Image from "next/image";
import React from "react";
import Heading from "./Heading";
import Link from "next/link";
import FooterLink from "./FooterLink";
import { RiFacebookLine, RiLinkedinLine, RiTwitterLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const FooterLinks = () => {
  return (
    <div className="relative top-[80px] left-[135px] w-[1170px] h-[236px] flex gap-[87px]">
      <div className="w-[217px] h-[188px] flex flex-col gap-[16px]">
        <div className="h-[24px] flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[24px]">
            <h6 className="font-inter font-bold leading-6 text-text text-2xl">
              Exclusive
            </h6>
            <Heading text="Subscribe" />
            <FooterLink text="Get 10% off your first order" />
          </div>
          <div className="w-[217px] h-[48px] rounded-[4px] border-[1.5px] border-text py-[12px] pl-[16px] flex gap-[32px]">
            <div>
              <label htmlFor=""></label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                id="email"
                className="placeholder:font-poppins placeholder:font-normal placeholder:leading-6 bg-transparent placeholder:text-sm w-[130px] h-6"
              />
            </div>
            <Image
              src="/images/icon-send.svg"
              alt="Send Icon Image"
              width={100}
              height={100}
              className="w-[24px] h-[24px]"
            />
          </div>
        </div>
      </div>

      <div className="w-[175px] h-[180px] flex flex-col gap-[24px]">
        <Heading text="Support" />
        <FooterLink text="111 Bijoy sarani, Dhaka,  &nbsp;  DH 1515, Bangladesh." />
        <FooterLink text="exclusive@gmail.com" />
        <FooterLink text="+88015-88888-9999" />
      </div>

      <div className="w-[123px] h-[236px] flex flex-col gap-[24px]">
        <Heading text="Account" />
        <FooterLink text="My Account" />
        <FooterLink text="Login / Register" />
        <FooterLink text="Cart" />
        <FooterLink text="Wishlist" />
        <FooterLink text="Shop" />
      </div>

      <div className="w-[109px] h-[196px] flex flex-col gap-[24px]">
        <Heading text="Quick Link" />
        <FooterLink text="Privacy Policy" />
        <FooterLink text="Terms Of Use" />
        <FooterLink text="FAQ" />
        <FooterLink text="Contact" />
      </div>

      <div className="w-[198px] h-[210px] flex flex-col gap-[24px]">
        <Heading text="Download App" />
        <div className="w-[198px] h-[110px] flex flex-col gap-[8px]">
          <p className="font-poppins leading-[18px] font-[500] text-text opacity-[70%] text-xs">
            Save $3 with App New User Only
          </p>
          <div className="flex gap-[8px] w-[198px] h-[84px]">
            <Image
              src="/images/Qrcode.png"
              alt="Qr-code Image"
              width={100}
              height={100}
              className="w-[80px] h-[80px]"
            />
            <div className="w-[110px] flex flex-col gap-[4px] justify-center">
              <Image
                src="/images/googlePlay.png"
                alt="Google Play Store Image"
                width={100}
                height={100}
                className="w-[104pxpx] h-[30px]"
              />
              <Image
                src="/images/appleStore.png"
                alt="Apple Store Image"
                width={100}
                height={100}
                className="w-[104pxpx] h-[30px]"
              />
            </div>
          </div>
        </div>
        <div className="w-[168px] h-[24px] flex gap-[24px]">
            <div className="w-[24px] h-[24px]">
              <RiFacebookLine className="text-bg w-[20.06px] h-[16.65px]" />
            </div>
            <div className="w-[24px] h-[24px]">
              <RiTwitterLine className="text-bg w-[18px] h-[18px]" />
            </div>
            <div className="w-[24px] h-[24px]">
              <FaInstagram className="text-bg w-[10.5px] h-[18px]" />
            </div>
            <div className="w-[24px] h-[24px]">
              <RiLinkedinLine className="text-bg w-[17.5px] h-[17.5px]" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default FooterLinks;
