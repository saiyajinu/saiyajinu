import React from "react";

interface SellingPointsPostProps {
    title: string;
    description: string;
    }

const SellingPointsPost = (props : SellingPointsPostProps) => {
  return (
    <div className="flex flex-row justify-center items-center">
      <svg
        width="25"
        height="19"
        viewBox="0 0 25 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-4"
      >
        <path
          d="M0 10.2977L8.5611 18.8751L25 2.45244L22.6399 0.125L8.5611 14.1875L2.32739 7.95383L0 10.2977Z"
          fill="#15E49E"
        />
      </svg>
      <div>
            <div className='text-lg font-medium mb-2'>{props.title}</div>
            <div className='text-gray-400 '>{props.description}</div>
      </div>
    </div>
  );
};

export default SellingPointsPost;
