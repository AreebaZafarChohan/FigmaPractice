import { OurProductCardProps } from '@/types/componentTypes';
import Image from 'next/image';
import Link from 'next/link';

const WishlistCard:React.FC<OurProductCardProps> = ({name, image, newPrice, rating, width, height, ratingImage, property, property2, property3, property4, oldPrice, badgeText, badgeColor, iconImage, id}) => {
    return (
      <div key={id} className='w-[270px] h-[350px] flex flex-col gap-[16px]'>
          <div className='w-[270px] h-[250px] rounded-[4px] bg-secondary justify-center items-center'>
          <div className={`relative top-2 left-3 w-[55px] h-[26px] py-[4px] px-[12px] rounded-[4px] bg-${badgeColor}`}>
                <p className='font-poppins font-normal leading-[18px] text-text text-xs'>{badgeText}</p>
            </div>
              <div className={`relative flex justify-center mt-8 ${property3}`}>
                  <Image 
                  src={`/images/${image}.png`}
                  alt={`${name} Image`}
                  width={200}
                  height={200}
                  className={`w-[${width}px] h-[${height}px] ${property}`}
                  />
              </div>
              <div className={`relative bottom-[10rem] ${property2} left-[13.7rem] w-[38px] h-[38px] bg-bg rounded-full flex justify-center items-center`}>
                  <Image
              src={`/images/${iconImage}.svg`}
              alt='Icon Image'
              width={200}
              height={200}
              className='p-1' />
              </div>

              <div className={`relative ${property4} h-[41px] rounded-r-[4px] rounded-l-[4px] hover:bg-text2 flex justify-center bg-secondary text-secondary transition-all duration-300 ease-in-out items-center hover:text-bg`}>
                    <Link href={`/wishlist/id${id}`} className='font-poppins font-[500] leading-6 text-xl'>Add To Cart</Link>
                </div>
          </div>
          <div className='h-[84px] flex flex-col gap-[8px]'>
              <p className='h-[24px] font-poppins font-[500] leading-6 text-text2'>{name}</p>
              <div className='w-[185px] h-[24px] flex gap-[8px]'>
                  <p className='font-poppins font-[500] leading-6 text-secondary2'>${newPrice}</p>
                  <p className='opacity-[50%] font-poppins font-[500] leading-6 text-text2' style={{textDecoration: 'Strikethrough'}}>{oldPrice}</p>
              </div>
              {
                ratingImage && (
                    <div className='w-[140px] h-[20px] flex gap-[8px]'>
                  <Image 
                  src={`/images/${ratingImage}.png`}
                  alt={`Rating Image - ${rating}`}
                  width={100}
                  height={200}
                  className='w-[100px] h-[20px]'/>
                  <p className='font-poppins font-[600] leading-[21px] text-text2 opacity-[50% ]'>{rating}</p>
              </div>
                )
              }
          </div>
      </div>
    );
  };
  
  export default WishlistCard;