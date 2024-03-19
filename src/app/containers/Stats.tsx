import React from "react";
import SideSection from "../components/SideSection";
import StatsPost from "../components/StatsPost";

const Stats = () => {
  return (
      <SideSection
      reverseWrap={false}
      title="Take your user monitoring experience to new ultimate level with file tracking"
      subtitle="Monthly Stats"
      description="Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool. It is built to perform and run fast on all of the latest mobile devices. Build out-of the box blazing fast apps with a small footprint and built-in best practices."
      >
        <div className="grid gap-6 grid-cols-1 w-fit mx-auto smlr:grid-cols-2 mt-4 lg:pr-4">
          <StatsPost title="Total Users" count="99" symbol="+" text="New users" />
          <StatsPost title="Total Users" count="99" symbol="+" text="New users" />
          <StatsPost title="Total Users" count="99" symbol="+" text="New users" />
          <StatsPost title="Total Users" count="99" symbol="+" text="New users" />
        </div>
        <></>
      </SideSection>
  );
};

export default Stats;
