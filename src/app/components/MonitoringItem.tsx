import React from 'react'
import Image from 'next/image';

interface MonitoringProps {
    title: string;
    icon: string;
    description: string;
    }

const MonitoringItem = (props: MonitoringProps) => {
  return (
    <div className='text-center my-6 flex flex-col xl:flex-row flex-wrap mx-auto group'>
        <Image src={props.icon} alt={props.title} className='mx-auto mb-1 group-hover:animate-shakeAnim'/>
        <div className='m-4 max-w-sm mx-auto xl:ml-2'>
            <div className='text-lg font-medium mb-2'>{props.title}</div>
            <div className='text-gray-400 '>{props.description}</div>
        </div>
    </div>    
  )
}

export default MonitoringItem
