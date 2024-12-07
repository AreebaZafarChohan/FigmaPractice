import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';

const ArrowButtons = () => {
  return (
    <div className='w-[100px] h-[46px] flex gap-[8px] mt-14'>
                <button className='w-[46px] h-[46px] rounded-full bg-secondary'>
                <IoArrowBackOutline className='text-[2.2rem] pt-1 pl-3 text-text2'/>
                </button>
                <button className='w-[46px] h-[46px] rounded-full bg-secondary'>
                <IoArrowForwardOutline  className='text-[2.2rem] pt-1 pl-3 text-text2'/>
                </button>
            </div>
  );
};

export default ArrowButtons;