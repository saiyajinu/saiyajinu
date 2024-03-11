import Link from "next/link";
import Image from "next/image"
import { animateScroll as scroll} from "react-scroll";

interface LogoProps {
  logoSrc?: {
    src: string;
    width: number;
    height: number;
  };
  title: string;
}

const Logo = (props : LogoProps) => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  return (
    <div onClick={scrollToTop} className="cursor-pointer">
        {props.logoSrc ? (
          <Image src={props.logoSrc.src} alt={props.title} width={props.logoSrc.width} height={props.logoSrc.height}/>
        ) : (
          <div className="font-medium">{props.title}</div>
        )}
    </div>
  );
};

export default Logo;
