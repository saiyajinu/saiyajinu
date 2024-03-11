import React from 'react'
import NavLink from './NavLink'

interface NavSidebarProps {
    sidebarOffset: string;
    closeSidebar: () => void;
    }

const NavSidebar = (props : NavSidebarProps ) => {
  return (
    <>
    <section className={`w-64 h-screen bg-white fixed transition-all duration-500 p-4 -right-${props.sidebarOffset} z-10`}>
        <div className='cursor-pointer absolute right-4 top-4' onClick={props.closeSidebar}>
          <svg className='w-6 h-6' fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </div>
      <div className='flex flex-col gap-4 mt-8 justify-center'>
        <NavLink to="section1" content='Section 1' color='black'/>
        <NavLink to="section2" content='Section 2' color='black'/>
      </div>
    </section>
    {
      props.sidebarOffset === '0' ? 
      <div className='fixed overscroll-none w-screen h-screen bg-secondary-transparent' onClick={props.closeSidebar}>
      </div> : null
    }
    </>
  )
}

export default NavSidebar