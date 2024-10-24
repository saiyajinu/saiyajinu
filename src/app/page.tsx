"use client";
import Hero from "@/app/containers/Hero";
import Navbar from "@/app/containers/Navbar";
import { Element } from 'react-scroll';
import 'animate.css';
import Offer from "./containers/Offer";
import Footer from "./containers/Footer";
import Monitoring from "./containers/Monitoring";
import Stats from "./containers/Stats";
import SellingPoints from "./containers/SellingPoints";
import Testimonials from "./containers/Testimonials";
import Blog from "./containers/Blog";
import Contact from "./containers/Contact";



export default function Home() {
  return (
    <>
      <Navbar />
      <Element name="section1">
        <Hero />
      </Element>
      <Element name="section2">
        <Offer />
      </Element>
      <Element name="section3">
        <Monitoring />
      </Element>
      <Element name="section4">
        <Stats />
      </Element>
      <Element name="selling-points">
        <SellingPoints />
      </Element>
      {/* <Testimonials /> */}
      {/* <Blog /> */}
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </>
  );
}
