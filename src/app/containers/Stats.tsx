import React from "react";
import SideSection from "../components/SideSection";
import StatsPost from "../components/StatsPost";

const Stats = () => {
  return (
      <SideSection
      reverseWrap={false}
      title="Digital Solutions for Real Problems"
      subtitle="Management and Traceability"
      description="Digitalizing processes brings efficiency, transparency and full control over workflows, whether in the public or private sector. We help you to achieve this goal."
>
        <div className="grid gap-6 grid-cols-1 w-fit mx-auto smlr:grid-cols-2 mt-4 lg:pr-4 hover:cursor-default">
          <StatsPost title="Eliminate" count="95" symbol="%" text="of Human Error" />
          <StatsPost title="Increase" count="90" symbol="%" text="Efficiency" />
          <StatsPost title="Decrease" count="99" symbol="%" text="of Legal Issues" />
          <StatsPost title="Control" count="100" symbol="%" text="of your Business" />
        </div>
        <></>
      </SideSection>
  );
};

export default Stats;
