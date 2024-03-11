import { useState } from 'react'
import Logo from '../components/Logo'
import NavLink from '../components/NavLink'
import NavSidebar from '../components/NavSidebar'
import HamburgerIcon from '../components/HamburgerIcon'

const Navbar = () => {
  const [sidebarOffset, setSidebarOffset] = useState('72')
  const openSidebar = () => {
    setSidebarOffset('0');
    document.body.style.overflow = 'hidden';
  }
  const closeSidebar = () => {
    setSidebarOffset('72')
    document.body.style.overflow = 'auto';
  }

  const [isScrolled, setIsScrolled] = useState(false);
  const changeScrolled = () => {
    if(window.scrollY >= 25) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  window.addEventListener('scroll', changeScrolled)

  return (
    <>
    <nav className={`fixed top-0 left-0 w-[100%] transition-all ease delay-200 px-12 border-[1px] border-solid ${isScrolled ? 'border-secondary-200 border-b-[rgba(255,255,255,0.1)]' : 'border-transparent'} min-h-20 ${isScrolled ? 'bg-secondary-200' : 'bg-transparent' } z-50
    ${isScrolled ? 'py-4' : 'py-5'}`}>
      <div className='hidden md:flex md:justify-between'>
        <div className='flex gap-8 p-3'>
          <Logo title="Spacedev.codes" />
          <NavLink to="section1" content='Section 1'/>
          <NavLink to="section2" content='Section 2'/>        
        </div>
        <div className='bg-primary-focused py-3 px-6 rounded-3xl text-black pointer hover:bg-primary-hover transition-all ease delay-150 cursor-pointer font-medium'>
          Contact Us
        </div>
      </div>

      <div className='flex justify-between md:hidden'>
        <div className='p-3'>
          <Logo title="Spacedev.codes" />
        </div>
        <div className='p-3' onClick={openSidebar}>
          <HamburgerIcon />
        </div>
      </div>
    </nav>
    <NavSidebar sidebarOffset={sidebarOffset} closeSidebar={closeSidebar}/>
  </>
  )
}

export default Navbar