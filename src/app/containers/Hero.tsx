import dashboard from "../../common/assets/banner-dashboard.png"
import Carousel from "../components/Carousel";
import Section from "../components/Section";
import { Noto_Serif } from "next/font/google";

const noto_serif = Noto_Serif({ subsets: ["latin"] });

const Hero = () => {
  return (
    <Section
    landing={true} 
    title="Complete Management and Traceability Solutions for your Business" 
    description="Explore our dedicated applications for workflow management and traceability, optimized for efficiency and total control."
    image={dashboard} 
    alt="dashboard"
    >
      <div className="text-center lg:mt-8">
        <p className={`my-16 font-semibold text-gray-500 leading-8 text-xl lg:text-2xl w-3/4 mx-auto ${noto_serif.className}`}>
          Our tech stack is built on the latest technologies, ensuring maximum performance and efficiency.
        </p>
        <Carousel />
      </div>
    </Section>
    
  );
};

export default Hero;
