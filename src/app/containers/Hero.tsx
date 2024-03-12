import React from "react";
import Image from "next/image"
import dashboard from "../../common/assets/banner-dashboard.png"
import Carousel from "../components/Carousel";

const Hero = () => {
  return (
    <section className="z-0 relative py-32">
      <div className="xl:min-h-[100vh]">
        <div className="my-0 mx-auto text-center max-w-4xl animate__animated animate__fadeInUp">
          <h2 className="text-2xl mx-3 leading-10 sm:text-3xl md:text-4xl xl:text-5xl xl:leading-[4rem]">
            The leading Customer <span>dashboard</span> for your daily workspace
          </h2>
          <p className="mt-4 text-gray-400 leading-8 text-sm sm:text-md md:text-lg lg:text-xl w-3/4 mx-auto">
            Join 30,000+ businesses that use Segment&quot;s software and APIs to collect, clean, and control their customer data.
          </p>
        </div>
        <div className="grid mt-12 mx-8 relative text-center z-10 md:mt-14 md:max-w-xl md:mx-auto lg:max-w-2xl lg:mt-12 xl:max-w-4xl 2xl:max-w-[90%]">
          <Image src={dashboard} alt="dashboard"/>
        </div>
      </div>
      <div className="text-center my-8">
        <p className="my-16 font-semibold text-gray-500 leading-8 text-md sm:text-lg md:text-xl lg:text-2xl w-3/4 mx-auto">
          Simplified scheduling for more than 200,000 customers
        </p>
        <Carousel />
      </div>
      
    </section>
  );
};

export default Hero;
