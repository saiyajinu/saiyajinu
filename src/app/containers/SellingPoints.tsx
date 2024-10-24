import React from "react";
import Section from "../components/Section";
import Image from "next/image";
import dashboard from "../../common/assets/banner-dashboard.png"
import SellingPointsPost from "../components/SellingPointsPost";

const SellingPoints = () => {
  return (
    <Section
      title="Optimizing Management and Traceability for Seamless Operations."
      subtitle="Key Selling Points"
      description="Leverage our cutting-edge solutions to streamline management and enhance traceability. Monitor your entire operation in real-time and make data-driven decisions with our comprehensive platform."
      landing={false}
    >
        <Image src={dashboard} alt="dashboard" className="mx-auto w-8/12 my-4"/>
        <div className="flex flex-row flex-wrap justify-center items-center gap-12 mt-8">
            <SellingPointsPost title="Enhanced Traceability" description="Track your products."/>
            <SellingPointsPost title="Real-Time Monitoring" description="Watch your operation live."/>
            <SellingPointsPost title="Custom Integrations" description="Make it fit your needs."/>
        </div>
    </Section>
  );
};

export default SellingPoints;
