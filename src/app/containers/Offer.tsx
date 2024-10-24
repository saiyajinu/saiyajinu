import OfferGrid from "../components/OfferGrid"
import OfferItem from "../components/OfferItem"
import Section from "../components/Section"

const Offer = () => {
  return (
    <Section
    landing={false}
    title="Key Features of Our Applications"
    description="Discover our suite of powerful tools that streamline operations, enhance visibility, and drive efficiency across your entire business ecosystem."
    >
      <OfferGrid/>
    </Section>
    )
}

export default Offer