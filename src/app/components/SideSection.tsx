import React from "react";
import Image, { StaticImageData } from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import SideSectionTitle from "./SideSectionTitle";
import SideSectionDescription from "./SideSectionDescription";

interface SideSectionProps {
  title: string;
  description: string;
  reverseWrap: boolean;
  subtitle?: string;
  children?: React.ReactNode;
}

const SideSection = (props: SideSectionProps) => {
  const childrenArray = React.Children.toArray(props.children);

  // Access the first and second children, if they exist.
  const sideChild = childrenArray[0];                                     // First child is the one that goes on the side.
  const insideChild = childrenArray.length > 1 ? childrenArray[1] : null; // Second child is the one that goes inside.

  return (
    <section
      className={`z-0 relative pt-12 px-4 sm:pt-24 mx-auto flex flex-col lg:flex-row ${props.reverseWrap ? "lg:flex-row-reverse lg:mr-16" : "lg:ml-16"}`}
    >
        <div className={`w-full lg:w-2/5`}>
          {props.subtitle ? <SectionSubtitle subtitle={props.subtitle} side={true}/> : null}
          <SideSectionTitle title={props.title} />
          <SideSectionDescription description={props.description} />
          {insideChild}
        </div>
      {sideChild}
    </section>
  );
};

export default SideSection;
