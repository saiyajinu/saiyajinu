import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface BlogPostProps {
    image: StaticImageData,
    }

const BlogPost = (props : BlogPostProps) => {
  return (
    <div className='flex flex-col gap-3 max-w-96 hover:-translate-y-4 transition-all ease duration-200 pb-2 mx-2 shrink'>
        <div className='rounded-xl overflow-hidden max-w-96 max-h-64'>
            <Image src={props.image} alt="post"/>
        </div>
        <div className='text-gray-400'>Dec 8, 2020</div>
        <div className='font-bold'>Five Common Mistakes Teams Make When Tracking Performance</div>
        <span className='text-primary-focused font-medium cursor-pointer w-fit'>Learn More</span>
    </div>
  )
}

export default BlogPost