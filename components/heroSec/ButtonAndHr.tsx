import Link from 'next/link';

const ButtonAndHr = () => {
  return (
   <div className='relative top-80 left-[42rem] w-[1308px]'>
    <div className='relative w-[234px] h-[56px] py-[16px] px-[48px] bg-secondary2 hover:bg-hoverButton'>
        <Link href="/wishlist" className='font-poppins font-[500] leading-6 text-text'>View All Products</Link>
    </div>
    <hr className='relative right-[33.5rem] z-10 mt-14 '/>
   </div>
  );
};

export default ButtonAndHr;