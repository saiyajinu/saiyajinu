import React from "react";
import NavLink from "./NavLink";

interface NavAllLinksProps {
    color?: string;
    }

const NavAllLinks = (props : NavAllLinksProps) => {
  return (
    <>
      <NavLink to="section1" content="Introduction" color={props.color || undefined}/>
      <NavLink to="section2" content="Features" color={props.color || undefined}/>
      <NavLink to="section3" content="Apps" color={props.color || undefined}/>
      <NavLink to="section4" content="Solutions" color={props.color || undefined}/>
      <NavLink to="selling-points" content="Selling Points" color={props.color || undefined}/>
      <NavLink to="contact" content="Contact" color={props.color || undefined}/>
    </>
  );
};

export default NavAllLinks;
