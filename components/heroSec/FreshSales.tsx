import Timer from '../moreReusableComponents/Timer';
import Image from 'next/image';
import Headings from '../moreReusableComponents/Headings';
import ArrowButtons from '../moreReusableComponents/ArrowButtons';
import Link from 'next/link';

const FreshSales = () => {

  return (
    <div className='w-[1308px] h-[493px] relative flex flex-col gap-[40px] top-[15rem] left-[8.2rem] '>
        <div className='w-[1170px] h-[103px] flex gap-[470px] '>
            <div className='w-[600px] h-[103px] flex gap-[87px]'>
                <Headings title='Today&apos;s' text='Flash Sales'/>

                <div className='w-[302px] h-[50px] flex gap-[8px] mt-12'>
                    <Timer text="Days" time="03"/>
                    <p className='w-[4px] h-[16px] text-hoverButton text-3xl font-bold pt-3 pr-4'>:</p>
                    <Timer text="Hours" time="23"/>
                    <p className='w-[4px] h-[16px] text-hoverButton text-3xl font-bold pt-3 pr-4'>:</p>
                    <Timer text="Minutes" time="19"/>
                    <p className='w-[4px] h-[16px] text-hoverButton text-3xl font-bold pt-3 pr-4'>:</p>
                    <Timer text="Seconds" time="56"/>
                </div>
            </div>

           <ArrowButtons />
        </div>
        <div className='w-[1308px] h-[350px] flex gap-[30px]'>

        <div className='w-[270px] h-[350px] flex flex-col gap-[16px]'>
        <div className='w-[270px] h-[250px] rounded-[4px] bg-secondary justify-center items-center'>
            <div className='relative top-2 left-3 w-[55px] h-[26px] py-[4px] px-[12px] rounded-[4px] bg-secondary2'>
                <p className='font-poppins font-normal leading-[18px] text-text text-xs'>-40%</p>
            </div>
            <div className='flex justify-center mt-8'>
                <Image 
                src='/images/gameRemote.png'
                alt="Game Remote Image"
                width={200}
                height={200}
                className="w-[172px] h-[152px]"
                />
            </div>
            <div className='relative bottom-[12rem] left-[14.3rem] w-[34px] h-[76px] flex flex-col gap-[8px]'>
            <div className='w-[34px] h-[34px] bg-bg rounded-full flex justify-center items-center'>
                  <Image
              src="/images/heart.svg"
              alt='Heart Icon Image'
              width={200}
              height={200}
              className='p-2' />
                  </div>
                  <div className='w-[34px] h-[34px] bg-bg rounded-full flex justify-center items-center'>
                  <Image
              src="/images/eye.svg"
              alt='Eye Icon Image'
              width={200}
              height={200}
              className='p-2' />
                  </div>
            </div>
            <div className='relative bottom-[4.6rem] h-[41px] rounded-r-[4px] rounded-l-[4px] bg-secondary hover:bg-text2 flex justify-center transition-all duration-300 ease-in-out items-center text-secondary hover:text-bg'>
                    <Link href={`/wishlist/id8`}
                     className='font-poppins font-[500] leading-6 text-xl'>Add To Cart</Link>
                </div>
        </div>
        <div className='h-[84px] flex flex-col gap-[8px]'>
            <p className='h-[24px] font-poppins font-[500] leading-6 text-text2 '>HAVIT HV-G92 Gamepad</p>
            <div className='w-[94px] h-[24px] flex gap-[12px]'>
                <p className='font-poppins font-[500] leading-6 text-secondary2'>$120</p>
                <p className='opacity-[50%] font-poppins font-[500] leading-6 text-text2' style={{textDecoration: 'Strikethrough'}}>$160</p>
            </div>
            <div className='w-[140px] h-[20px] flex gap-[8px]'>
                <Image 
                src={`/images/FiveStar.png`}
                alt={`Rating Image - 88`}
                width={100}
                height={200}
                className='w-[100px] h-[20px]'/>
                <p className='font-poppins font-[600] leading-[21px] text-text2 opacity-[50% ]'>(88)</p>
            </div>
        </div>
    </div>
            <div className='w-[270px] h-[350px] flex flex-col gap-[16px]'>
        <div className='w-[270px] h-[250px] rounded-[4px] bg-secondary justify-center items-center'>
            <div className='relative top-2 left-3 w-[55px] h-[26px] py-[4px] px-[12px] rounded-[4px] bg-secondary2'>
                <p className='font-poppins font-normal leading-[18px] text-text text-xs'>-35%</p>
            </div>
            <div className='flex justify-center mt-8'>
                <Image 
                src="/images/keyboard.png"
                alt="AK-900 Wired Keyboard"
                width={200}
                height={200}
                className="w-[191px] h-[101px]"/>
            </div>
            <div className='relative bottom-[9rem] left-[14.3rem] w-[34px] h-[76px] flex flex-col gap-[8px]'>
            <div className='w-[34px] h-[34px] bg-bg rounded-full flex justify-center items-center'>
                  <Image
              src="/images/heart.svg"
              alt='Heart Icon Image'
              width={200}
              height={200}
              className='p-2' />
                  </div>
                  <div className='w-[34px] h-[34px] bg-bg rounded-full flex justify-center items-center'>
                  <Image
              src="/images/eye.svg"
              alt='Eye Icon Image'
              width={200}
              height={200}
              className='p-2' />
                  </div>
            </div>
            <div className='relative -top-6 h-[41px] rounded-r-[4px] rounded-l-[4px] bg-text2 flex justify-center items-center'>
                    <Link href={`/wishlist/id7`}
                     className='font-poppins text-bg font-[500] leading-6 text-xl'>Add To Cart</Link>
                </div>
        </div>
        <div className='h-[84px] flex flex-col gap-[8px]'>
            <p className='h-[24px] font-poppins font-[500] leading-6 text-text2 '>AK-900 Wired Keyboard</p>
            <div className='w-[94px] h-[24px] flex gap-[12px]'>
                <p className='font-poppins font-[500] leading-6 text-secondary2'>$960</p>
                <p className='opacity-[50%] font-poppins font-[500] leading-6 text-text2' style={{textDecoration: 'Strikethrough'}}>$1160</p>
            </div>
            <div className='w-[140px] h-[20px] flex gap-[8px]'>
                <Image 
                src="/images/FourStar.png"
                alt="Rating Image - 75"
                width={100}
                height={200}
                className='w-[100px] h-[20px]'/>
                <p className='font-poppins font-[600] leading-[21px] text-text2 opacity-[50% ]'>(75)</p>
            </div>
        </div>
    </div>


    <div className='w-[270px] h-[350px] flex flex-col gap-[16px]'>
        <div className='w-[270px] h-[250px] rounded-[4px] bg-secondary justify-center items-center'>
            <div className='relative top-2 left-3 w-[55px] h-[26px] py-[4px] px-[12px] rounded-[4px] bg-secondary2'>
                <p className='font-poppins font-normal leading-[18px] text-text text-xs'>-30%</p>
            </div>
            <div className='flex justify-center mt-8'>
                <Image 
                src='/images/gamingMonitor.png'
                alt="Game Remote Image"
                width={200}
                height={200}
                className="w-[170px] h-[129  px]"
                />
            </div>
            <div className='relative bottom-[10.6rem] left-[14.3rem] w-[34px] h-[76px] flex flex-col gap-[8px]'>
            <div className='w-[34px] h-[34px] bg-bg rounded-full flex justify-center items-center'>
                  <Image
              src="/images/heart.svg"
              alt='Heart Icon Image'
              width={200}
              height={200}
              className='p-2' />
                  </div>
                  <div className='w-[34px] h-[34px] bg-bg rounded-full flex justify-center items-center'>
                  <Image
              src="/images/eye.svg"
              alt='Eye Icon Image'
              width={200}
              height={200}
              className='p-2' />
                  </div>
            </div>

            <div className='relative bottom-[3.4rem] h-[41px] rounded-r-[4px] rounded-l-[4px] bg-secondary hover:bg-text2 flex justify-center transition-all duration-300 ease-in-out items-center text-secondary hover:text-bg'>
                    <Link href={`/wishlist/id6`}
                     className='font-poppins font-[500] leading-6 text-xl'>Add To Cart</Link>
                </div>
        </div>
        <div className='h-[84px] flex flex-col gap-[8px]'>
            <p className='h-[24px] font-poppins font-[500] leading-6 text-text2 '>IPS LCD Gaming Monitor </p>
            <div className='w-[94px] h-[24px] flex gap-[12px]'>
                <p className='font-poppins font-[500] leading-6 text-secondary2'>$370</p>
                <p className='opacity-[50%] font-poppins font-[500] leading-6 text-text2' style={{textDecoration: 'Strikethrough'}}>$400</p>
            </div>
            <div className='w-[140px] h-[20px] flex gap-[8px]'>
                <Image 
                src={`/images/FiveStar.png`}
                alt={`Rating Image - 99`}
                width={100}
                height={200}
                className='w-[100px] h-[20px]'/>
                <p className='font-poppins font-[600] leading-[21px] text-text2 opacity-[50% ]'>(99)</p>
            </div>
        </div>
    </div>


    <div className='w-[270px] h-[350px] flex flex-col gap-[16px]'>
        <div className='w-[270px] h-[250px] rounded-[4px] bg-secondary justify-center items-center'>
            <div className='relative top-2 left-3 w-[55px] h-[26px] py-[4px] px-[12px] rounded-[4px] bg-secondary2'>
                <p className='font-poppins font-normal leading-[18px] text-text text-xs'>-25%</p>
            </div>
            <div className='flex justify-center mt-8'>
                <Image 
                src='/images/chair.png'
                alt="Game Remote Image"
                width={200}
                height={200}
                className="w-[107px] h-[180px]"
                />
            </div>
            <div className='relative bottom-[14rem] left-[14.3rem] w-[34px] h-[76px] flex flex-col gap-[8px]'>
            <div className='w-[34px] h-[34px] bg-bg rounded-full flex justify-center items-center'>
                  <Image
              src="/images/heart.svg"
              alt='Heart Icon Image'
              width={200}
              height={200}
              className='p-2' />
                  </div>
                  <div className='w-[34px] h-[34px] bg-bg rounded-full flex justify-center items-center'>
                  <Image
              src="/images/eye.svg"
              alt='Eye Icon Image'
              width={200}
              height={200}
              className='p-2' />
                  </div>
            </div>

            <div className='relative bottom-[6.6rem] h-[41px] rounded-r-[4px] rounded-l-[4px] bg-secondary hover:bg-text2 flex justify-center transition-all duration-300 ease-in-out items-center text-secondary hover:text-bg'>
                    <Link href={`/wishlist/id9`}
                     className='font-poppins font-[500] leading-6 text-xl'>Add To Cart</Link>
                </div>
        </div>
        <div className='h-[84px] flex flex-col gap-[8px]'>
            <p className='h-[24px] font-poppins font-[500] leading-6 text-text2 '>S-Series Comfort Chair </p>
            <div className='w-[94px] h-[24px] flex gap-[12px]'>
                <p className='font-poppins font-[500] leading-6 text-secondary2'>$375</p>
                <p className='opacity-[50%] font-poppins font-[500] leading-6 text-text2' style={{textDecoration: 'Strikethrough'}}>$400</p>
            </div>
            <div className='w-[140px] h-[20px] flex gap-[8px]'>
                <Image 
                src={`/images/FourHalfStar.png`}
                alt={`Rating Image - 99`}
                width={100}
                height={200}
                className='w-[100px] h-[20px]'/>
                <p className='font-poppins font-[600] leading-[21px] text-text2 opacity-[50% ]'>(99)</p>
            </div>
        </div>
    </div>

    <div className='w-[270px] h-[350px] flex flex-col gap-[16px] overflow-hidden no-scrollbar'>
        <div className='w-[270px] h-[250px] rounded-[4px] bg-secondary justify-center items-center'>
            <div className='relative top-2 left-3 w-[55px] h-[26px] py-[4px] px-[12px] rounded-[4px] bg-secondary2'>
                <p className='font-poppins font-normal leading-[18px] text-text text-xs'>-25%</p>
            </div>
            <div className='flex justify-center mt-8'>
                <Image 
                src='/images/chair.png'
                alt="Game Remote Image"
                width={200}
                height={200}
                className="w-[107px] h-[180px]"
                />
            </div>
            <div className='relative bottom-[12rem] left-[14.3rem] w-[34px] h-[76px] flex flex-col gap-[8px]'>
            <div className='w-[34px] h-[34px] bg-bg rounded-full flex justify-center items-center'>
                  <Image
              src="/images/heart.svg"
              alt='Heart Icon Image'
              width={200}
              height={200}
              className='p-2' />
                  </div>
                  <div className='w-[34px] h-[34px] bg-bg rounded-full flex justify-center items-center'>
                  <Image
              src="/images/eye.svg"
              alt='Eye Icon Image'
              width={200}
              height={200}
              className='p-2' />
                  </div>
            </div>
        </div>
        <div className='h-[84px] flex flex-col gap-[8px]'>
            <p className='h-[24px] font-poppins font-[500] leading-5 text-text2 '>S-Series Co </p>
            <div className='w-[94px] h-[24px] flex gap-[12px]'>
                <p className='font-poppins font-[500] leading-6 text-secondary2'>$375</p>
                <p className='opacity-[50%] font-poppins font-[500] leading-6 text-text2' style={{textDecoration: 'Strikethrough'}}>$400</p>
            </div>
            <div className='w-[140px] h-[20px] flex gap-[8px]'>
                <Image 
                src={`/images/FourHalfStar.png`}
                alt={`Rating Image - 99`}
                width={100}
                height={200}
                className='w-[100px] h-[20px]'/>
                <p className='font-poppins font-[600] leading-[21px] text-text2 opacity-[50% ]'>(99)</p>
            </div>
        </div>
    </div>

        </div>
    </div>
  );
};

export default FreshSales;