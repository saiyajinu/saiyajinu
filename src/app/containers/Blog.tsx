import React from 'react'
import Section from '../components/Section'
import BlogPost from '../components/BlogPost'
import postPicture from '../../common/assets/post2.png'

const Blog = () => {
  return (
    <Section title='What our author post on Newsfeed' subtitle='Updated Blog Post' landing={false}>
        <div className='flex flex-row flex-wrap gap-6 w-fit mx-auto mt-10 justify-center items-center shrink'>
            <BlogPost image={postPicture}/>
            <BlogPost image={postPicture}/>
            <BlogPost image={postPicture}/>
        </div>
        
    </Section>
  )
}

export default Blog