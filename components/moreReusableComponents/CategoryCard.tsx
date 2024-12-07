import Image from 'next/image'
import React from 'react'

const CategoryCard = ({name}: {name: string;}) => {
  return (
    <div className='w-[170px] h-[145px] border rounded-[4px] border-text2 border-opacity-[30%] flex gap-4 flex-col justify-center items-center hover:bg-secondary2 hover:border-secondary2'>
        <Image
        src={`/images/${name}.png`}
        alt={`${name} Image`} 
        width={100}
        height={100}
        className='w-[56px] h-[56px]'/>
        <p className='font-poppins font-normal leading-6 *:text-text2'>{name}</p>
    </div>
  )
}

export default CategoryCard