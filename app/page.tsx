import BestSellingProducts from "@/components/heroSec/BestSellingProducts";
import Button from "@/components/heroSec/Button";
import ButtonAndHr from "@/components/heroSec/ButtonAndHr";
import Category from "@/components/heroSec/Category";
import FreshSales from "@/components/heroSec/FreshSales";
import HeroSection from "@/components/heroSec/HeroSection";
import MusicFrame from "@/components/heroSec/MusicFrame";
import NewArrival from "@/components/heroSec/NewArrival";
import OurProducts from "@/components/heroSec/OurProducts";
import Policies from "@/components/moreReusableComponents/Policies";
import Link from "next/link";
import { IoArrowUpOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div className="w-[1440px] h-[5902px] bg-bg ">
      <HeroSection />
      <FreshSales />
      <ButtonAndHr />
      <Category />
      <BestSellingProducts />
      <MusicFrame />
      <OurProducts />
      <Button />
      <NewArrival />
      <Policies />
      <button className='w-[46px] h-[46px] rounded-full bg-secondary hover:bg-button1 relative top-[96rem] left-[82rem]'>
                <Link href="/"><IoArrowUpOutline  className='text-[2.2rem] pt-1 pl-3 text-text2'/></Link>
                </button>
    </div>
  );
}
