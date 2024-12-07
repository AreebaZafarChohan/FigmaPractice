import Image from 'next/image';
import React from 'react'
import WishlistCard from './WishListCard';

const WishlistComponent = () => {
  return (
    <div className='relative top-[7rem] left-[8rem] w-[1170px] h-[984px] flex flex-col gap-[80px] mb-[14rem]'>
        <div className='w-[1170px] h-[56px] flex gap-[835px]'>
            <h5 className='font-poppins w-[112px] h-[26px] font-normal text-text2 leading-[26px] text-xl'>Wishlist (4)</h5>
            <button className='w-[223px] h-[56px] border rounded-[4px] px-[48px] py-[16px] border-black/50 text-text2 bg-transparent hover:border-secondary2 hover:bg-secondary2 transition-all duration-300 ease-in-out'>Move All To Bag</button>
        </div>
        <div className='w-[1170px] h-[322px] flex gap-[30px]'>
        <WishlistCard name='Gucci duffle bag' newPrice='960' oldPrice='$1160' width={178} height={129} image='bag' badgeColor='secondary2' badgeText='-35%'
        iconImage='delete' 
        property2='-top-[15rem]' property='pb-14' property3='' property4='bottom-[5rem]' id='1'/>


        <WishlistCard name='RGB liquid CPU Cooler' newPrice='1960' width={191} height={95} image='CPUCooler'
        iconImage='delete' 
        property2='-top-[11.5rem]' property='pt-12' property3='' property4='bottom-[1.3rem]' id='2'/>
         
        <WishlistCard name='GP11 Shooter USB Gamepad' newPrice='550' width={178} height={150} image='Gamepad'
        iconImage='delete' 
        property2='-top-[13rem]' property='' property3='bottom-4' property4='bottom-[2.8rem]' id='3'/>

        <WishlistCard name='Quilted Satin Jacket' newPrice='750' width={178} height={129} image='jacket'
        iconImage='delete' 
        property2='-top-[15rem]' property='' property3='bottom-10' property4='bottom-[4.3rem]' id='4'/>
        </div>

        <div className='w-[1170px] h-[466px] flex flex-col gap-[60px]'>
            <div className='w-[1170px] h-[56px] flex gap-[864px]'>
            <div className="w-[150px] h-[40px] flex gap-[16px]">
        <Image
        src="/images/Rectangle.svg"
        alt="Rectangle"
        width={100}
        height={100}
        className="w-[20px] h-[40px]" />
        <p className="font-poppins font-[400] leading-[26px] text-text2 pt-3 text-lg">
          Just For You
        </p>
      </div>
      <button className='w-[150px] h-[56px] border rounded-[4px] px-[48px] py-[16px] border-black/50 text-text2 bg-transparent hover:border-secondary2 hover:bg-secondary2 transition-all duration-300 ease-in-out'>See All</button>
            </div>
            <div className='w-[1170px] h-[350px] flex gap-[30px]'>
                
            <WishlistCard name='ASUS FHD Gaming Laptop' newPrice='960' oldPrice='$1160' rating='(65)' ratingImage='FiveStar' width={150} height={160} image='laptop'
        iconImage='eye' badgeColor='secondary2'badgeText='-35%'
        property2='-top-[12.6rem]' property='' property3='bottom-2' property4='bottom-[2.7rem]' id='5'/>

<WishlistCard name='IPS LCD Gaming Monitor' newPrice='1160' rating='(65)' ratingImage='FiveStar' width={170} height={129} image='GamingMonitor'
        iconImage='eye' 
        property2='-top-[11rem]' property='' property3='bottom-2' property4='bottom-[0.8rem]' id='6'/>


<WishlistCard name='HAVIT HV-G92 Gamepad' newPrice='560' rating='(65)' ratingImage='FiveStar' width={172} height={152} image='Gamepad' badgeColor='button1'badgeText='NEW'
        iconImage='eye' 
        property2='-top-[12.3rem]' property='' property3='bottom-2' property4='bottom-[2.2rem]' id='3'/>


<WishlistCard name='AK-900 Wired Keyboard' newPrice='960' rating='(65)' ratingImage='FiveStar' width={191} height={101} image='keyboard'
        iconImage='eye' 
        property2='-top-[9rem]' property='' property3='-bottom-6' property4='-bottom-[1.2rem]' id='8'/>
            </div>
        </div>
    </div>
  );
};

export default WishlistComponent;