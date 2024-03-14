import React from 'react'
import NavLink from './NavLink'

interface NavSidebarProps {
    sidebarOffset: string;
    closeSidebar: () => void;
    }

const NavSidebar = (props : NavSidebarProps ) => {
  return (
    <>
    <div className={`fixed w-64 min-h-screen bg-white transition-all duration-500 p-4 top-0 ${props.sidebarOffset == '72' ? '-right-72' : 'right-0'} z-50`}>
        <button className="absolute top-4 right-4" onClick={props.closeSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      <div className='flex flex-col gap-4 mt-8'>
        <NavLink to="section1" content='Section 1' color='black'/>
        <NavLink to="section2" content='Section 2' color='black'/>
        <NavLink to="section3" content='Section 3' color='black'/>  
      </div>
    </div>
    {
      props.sidebarOffset === '0' ? 
      <div className='fixed overscroll-none w-screen h-screen bg-secondary-transparent' onClick={props.closeSidebar}>
      </div> : null
    }
    </>
  )
}

export default NavSidebar