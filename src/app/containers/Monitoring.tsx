import headphone from "../../common/assets/icons/headphone.svg";
import rocket from "../../common/assets/icons/rocket.svg";
import Section from "../components/Section";
import MonitoringItem from "../components/MonitoringItem";
import report1 from "../../common/assets/report1.png";
import report2 from "../../common/assets/report2.png";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const monitoringFeatures = [
  {
    id: 1,
    icon: rocket,
    title: "Daily Graph analysis",
    description: `Stay on top of your task lists and stay in touch with what's happening by the latest UI updates`,
  },
  {
    id: 2,
    icon: headphone,
    title: "Communication Speedy",
    description: `Stay on top of your task lists and stay in touch with what's happening and what’s out.`,
  },
];

const Monitoring = () => {
  return (
    <div className="flex flex-wrap-reverse flex-row pt-16">
      <div className="sm:max-w-lg my-auto relative mx-auto ">
        <Fade direction="up" triggerOnce>
          <Image src={report1} alt="report1" className="" />
        </Fade>
        <Fade direction="up" triggerOnce delay={400}>
          <Image
            src={report2}
            alt="report2"
            className="absolute -bottom-12 -right-12 sm:max-w-64"
          />
        </Fade>
      </div>
      <Section
        title="Advanced analytics tools to keep you in control"
        subtitle="File System Tracking"
        description="Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool with the new experience templates."
        landing={false}
      >
        <div className="flex flex-row flex-wrap xl:flex-col">
        {monitoringFeatures.map((feature) => {
          return (
            <MonitoringItem
              title={feature.title}
              icon={feature.icon}
              description={feature.description}
              key={feature.id}
            />
          );
        })}
        </div>
        
      </Section>
    </div>
  );
};

export default Monitoring;
