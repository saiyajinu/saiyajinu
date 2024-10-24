import React from "react";

interface StatsPostProps {
  count: string;
  text: string;
  title: string;
  symbol: string;
}

const StatsPost = (props: StatsPostProps) => {
  return (
    <div className="bg-posts w-52 text-base sm:text-lg rounded-xl shadow-md py-12 px-8 relative overflow-hidden duration-300 transition-transform hover:-translate-y-2 smlr:even:top-10">
      <p className="">{props.title}</p>
      <div className="">
        <span className="text-primary-focused text-6xl">{props.count}{props.symbol}</span>
      </div>
      <p>{props.text}</p>
    </div>
  );
};

export default StatsPost;
