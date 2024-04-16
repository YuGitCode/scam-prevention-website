import { homepage } from '../constants';
import { CiMenuFries } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles';
function NavBar() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const menuicon = 'w-[28px] h-[28px] object-contain';
  const menuclose = <IoMdClose size={25} color='white' className={menuicon} />;
  const menu = <CiMenuFries size={25} color='white' className={menuicon} />;
  const [activeTab, setActiveTab] = useState(null);
  const homepage = [
    { id: '/', title: 'Home', active: false },
    { id: 'data', title: 'Data', active: true },
    { id: 'simulation', title: 'Simulation', active: false },
    { id: 'Guide', title: 'Guide', active: false },
  ];
  const [scrollWidth, setScrollWidth] = useState('0%');

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollWidth(`${scrolled}%`);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <div className='scroll-watcher' style={{ width: scrollWidth }} />
      <div className='bg-primary w-full overflow-hidden '>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <nav className='w-full flex py-6 justify-between items-center navbar '>
              <Link
                className={`w-[124px] h-[32px] text-[26px] text-[#34d399] font-semibold font-poppins `}
                to='/'
              >
                E-Secure
              </Link>
              <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {homepage.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] text-white transition-transform duration-300 transform hover:scale-110  ${
                      index == homepage.length - 1 ? 'mr-0' : 'mr-10'
                    }`}
                  >
                    <Link to={`${nav.id}`}>{nav.title}</Link>
                  </li>
                ))}
              </ul>

              <div className='sm:hidden flex flex-1 justify-end items-center md:hidden'>
                <div onClick={handleToggle}>{toggle ? menuclose : menu}</div>
                <div
                  className={`${
                    toggle ? 'flex' : 'hidden'
                  } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                  <ul className='list-none flex flex-col justify-end items-center flex-1'>
                    {homepage.map((nav, index) => (
                      <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] text-white transition-transform duration-300 transform hover:scale-110 ${
                          index == homepage.length - 1 ? 'mr-0' : 'mb-4'
                        }`}
                      >
                        <Link to={`${nav.id}`}>{nav.title}</Link>
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
