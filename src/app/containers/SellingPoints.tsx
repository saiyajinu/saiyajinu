import React from "react";
import Section from "../components/Section";
import Image from "next/image";
import dashboard from "../../common/assets/banner-dashboard.png"
import SellingPointsPost from "../components/SellingPointsPost";

const SellingPoints = () => {
  return (
    <Section
      title="Grain is an essential part of your daily workflow."
      subtitle="Key selling points"
      description="Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool. Create professional ads."
      landing={false}
    >
        <Image src={dashboard} alt="dashboard" className="mx-auto w-8/12 my-4"/>
        <div className="flex flex-row flex-wrap justify-center items-center gap-12 mt-8">
            <SellingPointsPost title="1-month Free Trial" description="We are open for trial sessions"/>
            <SellingPointsPost title="1-month Free Trial" description="We are open for trial sessions"/>
            <SellingPointsPost title="1-month Free Trial" description="We are open for trial sessions"/>
        </div>
    </Section>
  );
};

export default SellingPoints;
