import React from 'react'

interface HamburgerProps {
  onclick: () => void;
  }

const HamburgerIcon = (props : HamburgerProps) => {
  return (
    <div className="group w-[25px] h-[20px] cursor-pointer relative" onClick={props.onclick}>
        <div className="absolute h-[2px] bg-white rounded right-0 top-[0px] w-[20px] group-hover:w-[25px] transition-all delay-100"></div>
        <div className="absolute h-[2px] bg-white rounded right-0 top-[10px] w-[15px] group-hover:w-[25px] transition-all delay-100"></div>
        <div className="absolute h-[2px] bg-white rounded right-0 top-[20px] w-[20px] group-hover:w-[25px] transition-all delay-100"></div>
    </div>
  )
}

export default HamburgerIcon