import React from 'react'

interface FooterWidgetProps {
    children?: React.ReactNode;
    title: string;
}

const FooterWidget = (props : FooterWidgetProps) => {
  return (
    <div className='flex flex-col gap-4 p-6'>
        <div className='mb-2 text-lg font-medium'>{props.title}</div>
        {props.children}
    </div>
  )
}

export default FooterWidget