import React from 'react'
import { Link } from 'react-scroll';

interface NavLinkProps {
    to: string;
    content: string;
    color?: string;
    hoverColor?: string;
}

const NavLink = (props : NavLinkProps) => {
    const color = props.color ? props.color : 'white';
    const hoverColor = props.hoverColor ? props.hoverColor : 'primary-focused';

  return (
    <Link activeClass="is-current" to={props.to} spy={true} smooth={true} duration={500} className={`cursor-pointer text-${color} hover:text-${hoverColor} transition-all`}>
        {props.content}
    </Link>
  )
}

export default NavLink