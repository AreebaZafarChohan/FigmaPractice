import React from 'react'

const RoundTimer = ({text, time, property}: {text: string; time:string; property:string;}) => {
  return (
    <div className='w-[62px] h-[62px] bg-bg rounded-full flex flex-col justify-center'>
    <p className='w-[19px] h-[20px] font-poppins font-[600] leading-[20px] text-text2 text-xl pl-[1.2rem] pt-1'>{time}</p>
    <p className={`w-[32px] h-[18px] font-poppins font-normal leading-[18px] text-text2 text-[0.7rem] ${property} `}>{text}</p>
</div>
  );
};

export default RoundTimer;