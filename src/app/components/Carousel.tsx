import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

import { clients } from '../../common/data/index';
import { Fragment } from 'react';

import { techStack } from '../../common/data/index';

const settings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 10000,
  swipe: false,
  autoplaySpeed: 0,
  pauseOnHover: false,
  cssEase: "linear",
  arrows: false,
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
};

const Carousel = () => {
  return (
    <Slider {...settings} className='w-4/5 mx-auto'>
      {techStack.map((tech, i) => (
              <Fragment key={i}>          
                  <Image src={tech.src} alt="logo" height={tech.height} style={{margin: '0 auto'}}/>
              </Fragment>
            ))}
    </Slider>
    )
}

export default Carousel