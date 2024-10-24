import OfferItem from "./OfferItem"
import support from "../../common/assets/icons/support.svg"
import efficacy from "../../common/assets/icons/efficacy.svg"
import traceability from "../../common/assets/icons/traceability.svg"
import optimisation from "../../common/assets/icons/optimisation.svg"
import feeCollection from "../../common/assets/icons/fee-collection.svg"

const keyFeatures = [
    {
      id: 1,
      title: 'Efficient Management',
      icon: efficacy,
    },
    {
      id: 2,
      title: 'Full Traceability',
      icon: traceability,
    },
    {
      id: 3,
      title: 'Optimized Operations',
      icon: optimisation,
    },
    {
      id: 4,
      title: 'Fee Collection',
      icon: feeCollection,
    },
    {
      id: 5,
      title: 'Instant Support',
      icon: support,
    },
  ];

const OfferGrid = () => {
    const names=["title1","title2","title3","title4","title5"]

  return (
    <div className="mt-8 max-w-[600px] lg:max-w-5xl mx-auto place-items-center flex-wrap flex-row flex justify-center items-center gap-12">
        {
            keyFeatures.map((feature) => {
                return <OfferItem title={feature.title} icon={feature.icon} key={feature.id}/>
            })
        }
    </div>
    
    )
}

export default OfferGrid