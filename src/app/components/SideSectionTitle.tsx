import React from 'react'
import { Noto_Serif } from 'next/font/google';

const noto_serif = Noto_Serif({ subsets: ["latin"] });

interface SideSectionTitleProps {
    title: string;
    }

const SideSectionTitle = (props : SideSectionTitleProps) => {
  return (
    <h2 className={`leading-10 xl:leading-[4rem] mx-3 lg:mx-0 text-xl sm:text-2xl md:text-3xl xl:text-4xl text-center lg:text-left ${noto_serif.className}`}>
        {props.title}
    </h2>
  )
}

export default SideSectionTitle