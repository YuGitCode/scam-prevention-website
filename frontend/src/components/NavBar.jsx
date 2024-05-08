import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles";

function NavBar() {
  //This is for the transitioning between menu icon and cross icon
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const menuicon = "w-[28px] h-[28px] object-contain";
  const menuclose = <IoMdClose size={25} color='white' className={menuicon} />;
  const menu = <CiMenuFries size={25} color='white' className={menuicon} />;

  //This is just constants for the links to other pages
  const homepage = [
    { id: "/", title: "Home", active: false },
    { id: "data", title: "Data", active: true },
    { id: "simulation", title: "Simulation", active: false },
    { id: "learning_center", title: "Learning Center", active: false },
  ];

  // This is for the animation effect at the top of the website. Starts from 0$
  // const [scrollWidth, setScrollWidth] = useState("0%");

  // const handleScroll = () => {
  //   const scrollTop = window.scrollY;
  //   const docHeight =
  //     document.documentElement.scrollHeight -
  //     document.documentElement.clientHeight;
  //   const scrolled = (scrollTop / docHeight) * 100;
  //   setScrollWidth(`${scrolled}%`);
  // };

  //Make sure handlescroll function triggers evertime there a scroll to calculate its position
  //And then unmount the component to ensure no memory leak.
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  // {
  //   /* This is the Navbar section where we will link the use between our pages*/
  // }
  return (
    <>
      {/*<div className='scroll-watcher' style={{ width: scrollWidth,  }} />*/}
      <div 
        className={`top-0 bg-gradient-to-r from-blue-800 to-indigo-900 w-full overflow-hidden bg-opacity-95 fixed mb-10`}
        style={{zIndex:100}}
        >
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <nav className='w-full flex py-6 justify-between items-center navbar '>
              <NavLink
                className={`w-[124px] h-[32px] text-[26px] text-[#34d399] font-semibold font-poppins `}
                to='/'
              >
                E-Secure
              </NavLink>
              <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {/* Here we loop through the whole constant nav bar values to display it on screen */}
                {homepage.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[20px] text-white transition-transform duration-300 transform hover:scale-110  ${
                      index == homepage.length - 1 ? "mr-0" : "mr-10"
                    }`}
                  >
                    {/* Change font color to green if its the page the user on. */}
                    <NavLink
                      to={`${nav.id}`}
                      style={({ isActive }) => ({
                        color: isActive ? "#34d399" : "white",
                      })}
                    >
                      {nav.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
              {/* When it riches small screen it will become a menu for better view */}
              <div className='sm:hidden flex flex-1 justify-end items-center md:hidden'>
                <div onClick={handleToggle}>{toggle ? menuclose : menu}</div>
                <div
                  className={`${
                    toggle ? "flex" : "hidden"
                  } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                  {/* Functionality is the same as previous one */}
                  <ul className='list-none flex flex-col justify-end items-center flex-1'>
                    {homepage.map((nav, index) => (
                      <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[20px] text-white transition-transform duration-300 transform hover:scale-110 ${
                          index == homepage.length - 1 ? "mr-0" : "mb-4"
                        }`}
                      >
                        <NavLink
                          to={`${nav.id}`}
                          style={({ isActive }) => ({
                            color: isActive ? "#34d399" : "white",
                          })}
                        >
                          {nav.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
