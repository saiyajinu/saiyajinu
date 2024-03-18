import React from "react";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });

interface SectionSubtitleProps {
    subtitle: string;
    side: boolean;
    }

const SectionSubtitle = (props: SectionSubtitleProps) => {
  return (
    <p
      className={`text-orange ${caveat.className} text-center ${props.side ? "lg:text-left" : null} tracking-wider font-caveat mb-2 text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold`}
    >
      {props.subtitle}
    </p>
  );
};

export default SectionSubtitle;
