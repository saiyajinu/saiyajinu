import React from "react";

interface SideSectionDescriptionProps {
  description: string;
}

const SideSectionDescription = (props: SideSectionDescriptionProps) => {
  return (
    <div className="mt-4 text-sm sm:text-md md:text-lg lg:text-xl text-center lg:text-left w-3/4 mx-auto lg:w-full leading-5 lg:leading-10 text-gray-400">
        {props.description}
    </div>
  );
};

export default SideSectionDescription;
