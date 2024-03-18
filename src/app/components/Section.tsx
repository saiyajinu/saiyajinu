import Image, { StaticImageData } from "next/image";
import { Caveat } from "next/font/google";
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";
import SectionDescription from "./SectionDescription";

const caveat = Caveat({ subsets: ["latin"] });
interface SectionProps {
  landing: boolean;
  title: string;
  description?: string;
  subtitle?: string;
  image?: StaticImageData;
  alt?: string;
  children?: React.ReactNode;
}

const Section = (props: SectionProps) => {
  return (
    <section
      className={`z-0 relative pt-12 sm:pt-24 mx-auto ${props.landing ? "mt-16" : ""}`}
    >
      {props.subtitle ? (
        <SectionSubtitle subtitle={props.subtitle} side={false}/>
      ) : null}
      <div>
        <div
          className={`my-0 mx-auto text-center max-w-4xl ${
            props.landing
              ? "animate__animated animate__fadeInUp animate__slow"
              : ""
          }`}
        >
          <SectionTitle title={props.title} landing={props.landing} />
          {
            props.description ? <SectionDescription description={props.description} /> : null
          }
        </div>
        {props.image && props.alt && (
          <div className="grid mt-12 mx-8 h-auto relative text-center z-10 md:mt-14 md:max-w-xl md:mx-auto lg:max-w-2xl lg:mt-12 xl:max-w-4xl 2xl:max-w-[90%]">
            <Image src={props.image} alt={props.alt} priority={props.landing ? true : undefined}/>
          </div>
        )}
      </div>
      {props.children}
    </section>
  );
};

export default Section;
