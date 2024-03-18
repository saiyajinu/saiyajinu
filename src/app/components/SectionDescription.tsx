import React from "react";

interface SectionDescriptionProps {
  description: string;
}

const SectionDescription = (props: SectionDescriptionProps) => {
  return (
    <div className="mt-4 text-sm sm:text-md md:text-lg lg:text-xl w-3/4 mx-auto">
      <p className="leading-5 lg:leading-10 text-gray-400">
        {props.description}
      </p>
    </div>
  );
};

export default SectionDescription;
