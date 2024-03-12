import OfferGrid from "../components/OfferGrid"
import OfferItem from "../components/OfferItem"
import Section from "../components/Section"

const Offer = () => {
  return (
    <Section
    landing={false}
    title="Choose dashboard for every stage of your customer journey"
    description="The rise of mobile devices transforms the way we consume information entirely and the world's most relevant channels such as Facebook and Instagram are almost exclusively used on mobile"
    >
      <OfferGrid/>
    </Section>
    )
}

export default Offer