import OfferItem from "./OfferItem"

const OfferGrid = () => {
    const names=["title1","title2","title3","title4","title5"]

  return (
    <div className="mt-8 max-w-[600px] lg:max-w-5xl mx-auto place-items-center flex-wrap flex-row flex justify-center items-center gap-12">
        {
            names.map((name) => {
                return <OfferItem title={name} icon="icon" key={name}/>
            })
        }
    </div>
    
    )
}

export default OfferGrid