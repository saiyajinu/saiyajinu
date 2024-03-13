import Image, { StaticImageData } from 'next/image'
import { Caveat } from 'next/font/google'

const caveat = Caveat({ subsets: ["latin"] })
interface SectionProps {
  landing: boolean
  title: string
  description: string
  subtitle?: string
  image?: StaticImageData
  alt?: string
  children?: React.ReactNode
}

const Section = (props : SectionProps) => {
  return (
    <section className="z-0 relative pt-24 mx-auto">
      {
        props.subtitle ? <p className={`text-orange ${caveat.className} tracking-wider font-caveat text-center mb-2 text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold`}>{props.subtitle}</p> : null

      }
      <div>
        <div className={`my-0 mx-auto text-center max-w-4xl ${props.landing ? 'animate__animated animate__fadeInUp animate__slow' : ''}`}>
          <h2 className={`${props.landing ? "text-2xl sm:text-3xl md:text-4xl xl:text-5xl" : "text-xl sm:text-2xl md:text-3xl xl:text-4xl"}
                           mx-3 leading-10 xl:leading-[4rem]`}>
            {props.title}
          </h2>
          <div className='mt-4 text-gray-400 text-sm sm:text-md md:text-lg lg:text-xl w-3/4 mx-auto'>
            <p className='leading-5 md:leading-10 text-gray-400'>
             {props.description}
            </p>
            
          </div>
        </div>
        {
          props.image && props.alt && (
            <div className="grid mt-12 mx-8 relative text-center z-10 md:mt-14 md:max-w-xl md:mx-auto lg:max-w-2xl lg:mt-12 xl:max-w-4xl 2xl:max-w-[90%]">
              <Image src={props.image} alt={props.alt} />
            </div>
          )
        }
        
      </div>
      {props.children}
      
    </section>
  )
}

export default Section