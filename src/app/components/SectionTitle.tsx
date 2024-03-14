import React from 'react'
import { Noto_Serif } from 'next/font/google';

const noto_serif = Noto_Serif({ subsets: ["latin"] });

interface SectionTitleProps {
    title: string;
    landing: boolean;
    }

const SectionTitle = (props : SectionTitleProps) => {
  return (
    <h2
    className={`${
      props.landing
        ? "text-2xl sm:text-3xl md:text-4xl xl:text-5xl"
        : "text-xl sm:text-2xl md:text-3xl xl:text-4xl"
    }
    mx-3 leading-10 xl:leading-[4rem]
    ${noto_serif.className}
    `}
  >
    {props.title}
  </h2>
  )
}

export default SectionTitle