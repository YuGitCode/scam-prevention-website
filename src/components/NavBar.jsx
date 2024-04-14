import React from 'react';
import { FaHome } from 'react-icons/fa';
import { BsClipboard2Data } from 'react-icons/bs';
import { CgGames } from 'react-icons/cg';
import { FaBookReader } from 'react-icons/fa';
const NavBar = () => {
  return (
    //NavBar
    //Placeholder so there margine between them. auto margin on x and max w of 1280px and
    //
    <nav>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <a
              className='flex flex-shrink-0 items-center mr-4'
              href='/index.html'
            >
              <span className='hidden md:block font-bold text-[#34d399] text-2xl ml-2'>
                E-Secure
              </span>
            </a>
            <div className='flex md:ml-auto'>
              <div class='flex space-x-5'>
                <NavBarIcon
                  icon={<FaHome size='30' color='#34d399' />}
                  label='Home'
                ></NavBarIcon>
                <NavBarIcon
                  icon={<BsClipboard2Data size='30' color='#0ea5e9' />}
                  label='Data'
                />
                <NavBarIcon
                  icon={<CgGames size='30' color='#f9a8d4' />}
                  label='Simulation'
                />
                <NavBarIcon
                  icon={<FaBookReader size='30' color='white' />}
                  label='Guide'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavBarIcon = ({ icon, label }) => (
  <div className='flex flex-col items-center justify-center'>
    <div className='navbar-icon group'>
      {icon}
      <span className='icon-title group-hover:scale-100'>{label}</span>
    </div>
  </div>
);
export default NavBar;
