import React, { useState } from 'react';
import { homepage } from '../constants';
import { CiMenuFries } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
function NavBar() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const menuicon = 'w-[28px] h-[28px] object-contain';
  const menuclose = <IoMdClose size={25} color='white' className={menuicon} />;
  const menu = <CiMenuFries size={25} color='white' className={menuicon} />;
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar '>
      <h1
        className={`w-[124px] h-[32px] text-[26px] text-[#34d399] font-semibold font-poppins `}
      >
        E-Secure
      </h1>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {homepage.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index == homepage.length - 1 ? 'mr-0' : 'mr-10'
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
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
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index == homepage.length - 1 ? 'mr-0' : 'mb-4'
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
