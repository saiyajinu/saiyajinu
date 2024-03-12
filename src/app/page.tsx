"use client";
import Hero from "@/app/containers/Hero";
import Navbar from "@/app/containers/Navbar";
import { Element } from 'react-scroll';
import 'animate.css';



export default function Home() {
  return (
    <>
      <Navbar />
      <Element name="section1">
        <Hero></Hero>
      </Element>
      <Element name="section2" className="p-96 bg-primary-hover">
        Home2222
      </Element>
    </>
  );
}
