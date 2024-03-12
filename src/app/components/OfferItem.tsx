interface OfferItemProps {
    title: string;
    icon: string;
}

const OfferItem = (props : OfferItemProps) => {
  return (
    <div className="text-center flex flex-col items-center w-max">
        <div className="w-28 h-28 m-4 flex justify-center items-center bg-primary-background hover:bg-primary-focused hover:text-black transition-all ease-linear rounded-3xl cursor-pointer">
            {props.icon}
        </div>
        <div className="font-medium mt-2 text-sm lg:text-base">
            {props.title}
        </div>
    </div>
    
    )
}

export default OfferItem