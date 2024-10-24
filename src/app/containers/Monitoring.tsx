import headphone from "../../common/assets/icons/headphone.svg";
import rocket from "../../common/assets/icons/rocket.svg";
import MonitoringItem from "../components/MonitoringItem";
import report1 from "../../common/assets/report1.png";
import report2 from "../../common/assets/report2.png";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import SideSection from "../components/SideSection";

import mobileApp from "../../common/assets/icons/mobile-app.svg";
import webApp from "../../common/assets/icons/web-app.svg";

const monitoringFeatures = [
  {
    id: 1,
    icon: webApp,
    title: "Web",
    description: `Built to work on any modern browser, our web apps provide optimal performance and accesibility for users.`,
  },
  {
    id: 2,
    icon: mobileApp,
    title: "Mobile",
    description: "Built with Ionic, our hybrid mobile applications combine native experience with web flexibility, delivering excellent performance on both Android and IOS"
  },
];

const Monitoring = () => {
  return (
    <SideSection
      reverseWrap={true}
      title="Applications for your Business"
      subtitle="Web and Mobile"
      description="We develop applications optimized for both web platforms and mobile devices, using a hybrid framework that ensures a smooth and unique experience across all devices"
    >
      <div className="m-auto relative w-4/5 lg:w-2/5 mb-32 lg:mb-0 lg:pb-48">
        <Fade direction="up" triggerOnce>
          <Image
            src={report1}
            alt="report1"
            className="h-auto"
          />
        </Fade>
        <Fade direction="up" triggerOnce delay={400}>
          <Image
            src={report2}
            alt="report2"
            className="absolute -bottom-24 -right-2 sm:-right-12 h-auto w-1/2 max-w-56 sm:max-w-96"
          />
        </Fade>
      </div>
      <div className="flex flex-col sm:flex-row lg:flex-col gap-2">
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
    </SideSection>
  );
};

export default Monitoring;
