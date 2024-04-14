import React from 'react';
import { ReactTyped } from 'react-typed';

const Hero = () => {
  return (
    <section>
      <div className=' w-auto sm:h-svh bg-security-bg bg-cover bg-center h-max py-60 mt-[-96px]'>
        <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
          <div class='text-center'>
            <h1 class='text-2xl font-extrabold text-white sm:text-5xl md:text-5xl'>
              Defend Your Dreams
            </h1>
            <h1 class='text-2xl font-bold text-white sm:text-5xl md:text-5xl'>
              Empower Your Trust
            </h1>
            <h1 class='text-2xl font-extrabold text-white sm:text-5xl md:text-5xl'>
              Don't Pave the Way for Scammers
            </h1>
            <div className='flex justify-center items-center'>
              <p className='md:text-4xl sm:text-3xl text-xl font-bold py-5'>
                Identify and prevent{' '}
              </p>
              <ReactTyped
                className='md:text-4xl sm:text-3xl text-xl font-bold pl-2 text-red-600 underline md:pl-4'
                strings={[
                  'Romance',
                  'Investment',
                  'Product Service',
                  'Extortion',
                  'Employment',
                  'Impersonation',
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
              <p className='md:text-4xl sm:text-3xl text-xl font-bold pl-2'>
                Scam
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
