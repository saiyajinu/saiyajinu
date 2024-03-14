import React from 'react'
import Image, { StaticImageData } from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";
import SectionDescription from './SectionDescription';

interface SideSectionProps {
    title: string
    description: string
    subtitle?: string
    image?: StaticImageData
    alt?: string
    children?: React.ReactNode
    }

const SideSection = (props : SideSectionProps) => {
  return (
    <section
      className={`z-0 relative pt-12 sm:pt-24 mx-auto lg:ml-0 lg:w-3/5`}
    >
      {props.subtitle ? (
        <SectionSubtitle subtitle={props.subtitle} />
      ) : null}
      <div>
        <div
          className={`my-0 mx-auto text-center max-w-4xl `}
        >
          <SectionTitle title={props.title} landing={false} />
          <SectionDescription description={props.description} />
        </div>
        {props.image && props.alt && (
          <div className="grid mt-12 mx-8 relative text-center z-10 md:mt-14 md:max-w-xl md:mx-auto lg:max-w-2xl lg:mt-12 xl:max-w-4xl 2xl:max-w-[90%]">
            <Image src={props.image} alt={props.alt} />
          </div>
        )}
      </div>
      {props.children}
    </section>
  )
}

export default SideSection