"use client";
import { useEffect, useState } from "react";
import Logo from "../components/Logo";
import NavLink from "../components/NavLink";
import NavSidebar from "../components/NavSidebar";
import HamburgerIcon from "../components/HamburgerIcon";
import NavAllLinks from "../components/NavAllLinks";
import logo from "../../common/assets/icons/logo_invert.png";

const Navbar = () => {
  const [sidebarOffset, setSidebarOffset] = useState("72");
  const openSidebar = () => {
    setSidebarOffset("0");
    document.body.style.overflow = "hidden";
  };
  const closeSidebar = () => {
    setSidebarOffset("72");
    document.body.style.overflow = "auto";
  };

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const changeScrolled = () => {
      if (window.scrollY >= 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener
    window.addEventListener("scroll", changeScrolled);

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", changeScrolled);
  }, []); // Empty dependency array means this runs once on mount and cleanup runs on unmount

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-screen transition-all px-8 sm:px-16 ease-linear border-[1px] border-solid ${
          isScrolled
            ? "border-secondary-200 border-b-[rgba(255,255,255,0.1)]"
            : "border-transparent"
        } min-h-20 ${isScrolled ? "bg-secondary-200" : "bg-transparent"} z-40
    ${isScrolled ? "py-4" : "py-5"}`}
      >
        <div className="hidden lg:flex lg:justify-between">
          <div className="flex gap-8 p-3">
            <Logo logoSrc={{src: logo, height: 24}} title="Spacedev.codes" />
            <NavAllLinks />
          </div>
          <div className="bg-primary-focused py-3 px-6 rounded-3xl text-black pointer hover:bg-primary-hover transition-all ease cursor-pointer font-medium">
            Contact Us
          </div>
        </div>

        <div className="flex justify-between lg:hidden">
          <div className="p-3">
            <Logo logoSrc={{src: logo, height: 24}} title="Spacedev.codes" />
          </div>
          <div className="p-3">
            <HamburgerIcon onclick={openSidebar} />
          </div>
        </div>
      </nav>
      <NavSidebar sidebarOffset={sidebarOffset} closeSidebar={closeSidebar} />
    </>
  );
};

export default Navbar;
