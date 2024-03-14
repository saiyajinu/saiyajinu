import React from 'react'

interface FooterPProps {
    text: string;
}

const FooterP = (props : FooterPProps) => {
  return (
    <p className="text-gray-300 cursor-pointer hover:text-white transition-colors ease-linear text-sm">
        {props.text}
    </p>
  )
}

export default FooterP