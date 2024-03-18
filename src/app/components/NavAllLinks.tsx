import React from "react";
import NavLink from "./NavLink";

interface NavAllLinksProps {
    color?: string;
    }

const NavAllLinks = (props : NavAllLinksProps) => {
  return (
    <>
      <NavLink to="section1" content="Section 1" color={props.color || undefined}/>
      <NavLink to="section2" content="Section 2" color={props.color || undefined}/>
      <NavLink to="section3" content="Section 3" color={props.color || undefined}/>
      <NavLink to="section4" content="Section 4" color={props.color || undefined}/>
    </>
  );
};

export default NavAllLinks;
