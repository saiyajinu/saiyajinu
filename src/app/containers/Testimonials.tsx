import React from 'react'
import Section from '../components/Section'
import TestimonialsPost from '../components/TestimonialsPost'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

const Testimonials = () => {
  return (
    <Section title="What our clients say about us" landing={false} subtitle='Testimonials'>
        <Slider {...settings} className='w-4/5 mx-auto'>
            <TestimonialsPost />
            <TestimonialsPost />
            <TestimonialsPost />
            <TestimonialsPost />
            <TestimonialsPost />
        </Slider>        
    </Section>
    )
}

export default Testimonials