import OfferItem from "./OfferItem"
import service1 from "../../common/assets/icons/service1.svg"
import service2 from "../../common/assets/icons/service2.svg"
import service3 from "../../common/assets/icons/service3.svg"
import service4 from "../../common/assets/icons/service4.svg"
import service5 from "../../common/assets/icons/service5.svg"

const services = [
    {
      id: 1,
      title: 'Fast Performance',
      icon: service1,
    },
    {
      id: 2,
      title: 'User Customization',
      icon: service2,
    },
    {
      id: 3,
      title: 'Modify structure',
      icon: service3,
    },
    {
      id: 4,
      title: 'Customer Analysis',
      icon: service4,
    },
    {
      id: 5,
      title: 'Instant Support',
      icon: service5,
    },
  ];

const OfferGrid = () => {
    const names=["title1","title2","title3","title4","title5"]

  return (
    <div className="mt-8 max-w-[600px] lg:max-w-5xl mx-auto place-items-center flex-wrap flex-row flex justify-center items-center gap-12">
        {
            services.map((service) => {
                return <OfferItem title={service.title} icon={service.icon} key={service.id}/>
            })
        }
    </div>
    
    )
}

export default OfferGrid