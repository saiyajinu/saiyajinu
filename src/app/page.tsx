"use client";
import Hero from "@/app/containers/Hero";
import Navbar from "@/app/containers/Navbar";
import { Element } from 'react-scroll';


export default function Home() {
  return (
    <>
      <Navbar />
      <Element name="section1" className="p-96 bg-black">
        Home
      </Element>
      <Element name="section2" className="p-96 bg-primary-hover">
        Home2222
      </Element>
      <Hero />
    </>
  );
}
