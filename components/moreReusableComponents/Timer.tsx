import React from 'react'

const Timer = ({text, time}: {text: string, time: string;}) => {
  return (
    <div className='w-[46px] h-[50px] flex flex-col gap-[4px]'>
    <p className='font-poppins font-[500] leading-[18px] text-text2 text-xs'>{text}</p>
    <p className='font-inter font-bold leading-[30px] tracking-[4%] text-text2 text-4xl'>{time}</p>
</div>
  );
};

export default Timer;