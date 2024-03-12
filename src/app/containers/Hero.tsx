import dashboard from "../../common/assets/banner-dashboard.png"
import Carousel from "../components/Carousel";
import Section from "../components/Section";

const Hero = () => {
  return (
    <Section
    landing={true} 
    title="The leading Customer dashboard for your daily workspace" 
    description="Join 30,000+ businesses that use Segment&quot;s software and APIs to collect, clean, and control their customer data."
    image={dashboard} 
    alt="dashboard"
    >
      <div className="text-center mt-8">
        <p className="my-16 font-semibold text-gray-500 leading-8 text-md sm:text-lg md:text-xl lg:text-2xl w-3/4 mx-auto">
          Simplified scheduling for more than 200,000 customers
        </p>
        <Carousel />
      </div>
    </Section>
    
  );
};

export default Hero;
