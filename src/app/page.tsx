"use client";
import Hero from "@/app/containers/Hero";
import Navbar from "@/app/containers/Navbar";
import { Element } from 'react-scroll';
import 'animate.css';
import Offer from "./containers/Offer";
import Footer from "./containers/Footer";



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
      <Footer />
    </>
  );
}
