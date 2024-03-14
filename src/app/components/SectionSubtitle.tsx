import React from "react";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });

interface SectionSubtitleProps {
    subtitle: string;
    }

const SectionSubtitle = (props: SectionSubtitleProps) => {
  return (
    <p
      className={`text-orange ${caveat.className} tracking-wider font-caveat text-center mb-2 text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold`}
    >
      {props.subtitle}
    </p>
  );
};

export default SectionSubtitle;
