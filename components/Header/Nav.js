import { useState } from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";
import React from "react";
import Logo from "../Logo/Logo";

const aboutDropdownLinks = [
  { id: "a1", link: "/", name: "About" },
  { id: "a2", link: "/", name: "Vission & Mission" },
  { id: "a3", link: "/", name: "Guiding Principles" },
];
const productsDropdownLinks = [
  { id: "a1", link: "/", name: "Glass Cleaner" },
  { id: "a2", link: "/", name: "Surface Cleaner" },
  { id: "a3", link: "/", name: "Floor Cleaner" },
  { id: "a4", link: "/", name: "Toilet Cleaner" },
  { id: "a5", link: "/", name: "Green Toilet Cleaner" },
  { id: "a6", link: "/", name: "Dish Washer" },
  { id: "a7", link: "/", name: "Room Freshner" },
  { id: "a8", link: "/", name: "Air Freshner" },
  { id: "a9", link: "/", name: "Dish Wash Bar" },
  { id: "a10", link: "/", name: "Syfo Bleach" },
  { id: "a11", link: "/", name: "Bathroom Cleaner" },
  { id: "a12", link: "/", name: "White Natheline Ball" },
  { id: "a13", link: "/", name: "Handwash Liquid" },
  { id: "a14", link: "/", name: "Syfo Power" },
];

























function NavLink({ to, children }) {
  return (
    <Link className={ `uppercase  hover:border-b-4 px-4 text-black md:text-white  hover:border-yellow-400 block py-2   transition-all duration-200   ${styles.navLink}`} href={to ? to : "/"}>
      {children}
    </Link>
  );
}



import { useEffect, useRef } from "react";



export function DropdownMenu({ title, links }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentHoveredDropdown, setCurrentHoveredDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  const showDropdown = () => {
    clearTimeout(hoverTimeoutRef.current);
    setIsOpen(true);
  };

  const hideDropdown = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    hideDropdown();
  };

  const handleDropdownMouseEnter = (index) => {
    clearTimeout(hoverTimeoutRef.current);
    setCurrentHoveredDropdown(index);
    setIsOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setCurrentHoveredDropdown(null);
    hideDropdown();
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative ${styles.dropdownMenu}`} ref={dropdownRef}>
      <button
        className={`block whitespace-nowrap py-2 px-4 hover:border-b-4  text-black md:text-white hover:border-yellow-400 ${styles.navLink} ${styles.dropdownButton}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {title}
      </button>
      {isOpen && (
        <div
          className={`relative min-h-screen md:min-h-0 shadow-none md:shadow-md md:absolute dropdown md:flex border-t-4 border-green-600 ${styles.dropdown}`}
        >
          {links.map((link, index) => (
            <div
              key={link.id}
              className={`dropdownLink  ${styles.dropdownLink}`}
              onMouseEnter={() => handleDropdownMouseEnter(index)}
              onMouseLeave={handleDropdownMouseLeave}
            >
              {link.sublinks ? (
                <>
                  <button
                    className={`py-2 r text-left ${styles.dropdownButton}`}
                    onClick={hideDropdown}
                  >
                    {link.name}
                  </button>
                  <div
                    className={`${
                      currentHoveredDropdown === index
                        ? ""
                        : "hidden"
                    } dropdown-menu ${styles.subDropdownMenu}`}
                  >
                    {link.sublinks.map((sublink) => (
                      <Link
                        className={`dropdown-item text-left text-black tracking-widest text-2xs ${styles.dropdownLink}`}
                        key={sublink.id}
                        href={sublink.link}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  className={`dropdown-item text-left ${styles.dropdownLink}`}
                  key={link?.id}
                  href={link.link}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}







export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`flex  tex-black ${ open && 'z-[200]'}  filter   drop-shadow-md bg-green-800 text-white px-4 py-2 h-13  items-center z-50 ${styles.navbar}`}
    >
      <div
        className={`fixed top-0 md:hidden w-1/2 left-0 h-screen   bg-white transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out filter drop-shadow-md ${
          styles.mobileNav
        }`}
      >
        <div
          className={`flex md:hidden items-center justify-center filter drop-shadow-md bg-white h-20 ${styles.mobileNavHeader}`}
        >
            <Link href={"/"}>
                <Logo/>
            </Link>

        </div>
        <div className={`flex  md:hidden  justify-center items-center flex-col mt-8 ${styles.mobileNavLinks}`}>
          <Link

            href={"/"}
          >
            Home
          </Link>
          {/* <NavLink to="/contact" onClick={() => setTimeout(() => setOpen(!open), 100)}>
            About
          </NavLink> */}
          <DropdownMenu title="About" links={aboutDropdownLinks} />
          <DropdownMenu title="Products" links={productsDropdownLinks} />
          <NavLink
            to="/"
            onClick={() => setTimeout(() => setOpen(!open), 100)}
          >
            our company
          </NavLink>
         
          
          <NavLink
            to="/"
            onClick={() => setTimeout(() => setOpen(!open), 100)}
          >
            products
          </NavLink>
          <NavLink
            to="/"
            onClick={() => setTimeout(() => setOpen(!open), 100)}
          >
            catalogue
          </NavLink>
          <NavLink
            to="/"
            onClick={() => setTimeout(() => setOpen(!open), 100)}
          >
            certificates
          </NavLink>
          <NavLink
            to="/"
            onClick={() => setTimeout(() => setOpen(!open), 100)}
          >
            Carrier
          </NavLink>
          <NavLink
            to="/"
            onClick={() => setTimeout(() => setOpen(!open), 100)}
          >
            Distributor
          </NavLink>
          <NavLink
            to="/"
            onClick={() => setTimeout(() => setOpen(!open), 100)}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/"
            onClick={() => setTimeout(() => setOpen(!open), 100)}
          >
            Contact Us
          </NavLink>
        </div>
      </div>
      <div className={` ${open && 'hidden'} w-3/12 md:hidden   flex items-center ${styles.logo}`}>

      </div>
      <div className={`w-9/12 flex md:justify-start  justify-end  items-center ${styles.menu}`}>
        <div
          className={`z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden ${styles.hamburger}`}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>
        <div className={`hidden md:flex  font-semibold text-[1.2rem]  justify-between gap-1 ${styles.desktopMenu}`}>
          <NavLink  to="/">Home</NavLink>
          <DropdownMenu title="Our Company" links={aboutDropdownLinks} />
          <DropdownMenu title="Products" links={productsDropdownLinks} />
          <NavLink to="/admissions" >Catalogue</NavLink>
          <NavLink to="/admissions" >Certificates</NavLink>
          <NavLink to="/newsnotice">Carrier</NavLink>
          <NavLink to="/newsnotice">Distributor</NavLink>
          <NavLink to="/newsnotice">Gallery</NavLink>
          <NavLink to="/newsnotice">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}





