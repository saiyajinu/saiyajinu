import React from 'react'
import Image from 'next/image';

interface MonitoringProps {
    title: string;
    icon: string;
    description: string;
    }

const MonitoringItem = (props: MonitoringProps) => {
  return (
    <div className='text-center mt-3 sm:my-6 flex flex-col lg:flex-row mx-auto group'>
        <Image src={props.icon} alt={props.title} className='mx-auto mb-1 group-hover:animate-shakeAnim'/>
        <div className='m-4 max-w-64 lg:max-w-96 mx-auto lg:ml-2'>
            <div className='text-lg font-medium mb-2'>{props.title}</div>
            <div className='text-gray-400 '>{props.description}</div>
        </div>
    </div>    
  )
}

export default MonitoringItem
