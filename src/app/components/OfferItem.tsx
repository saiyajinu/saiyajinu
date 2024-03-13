import { StaticImageData } from "next/image";
import Image from "next/image";

interface OfferItemProps {
    title: string;
    icon: StaticImageData;
}

const OfferItem = (props : OfferItemProps) => {
  return (
    <div className="text-center flex flex-col items-center w-max mx-2">
        <div className="w-28 h-28 flex justify-center items-center bg-primary-background hover:bg-primary-focused hover:text-black transition-all ease-linear rounded-3xl cursor-pointer">
            <Image src={props.icon} alt={props.title} className=""></Image>
        </div>
        <div className="font-medium mt-1 text-sm lg:text-base">
            {props.title}
        </div>
    </div>
    
    )
}

export default OfferItem