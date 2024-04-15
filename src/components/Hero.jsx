import React from 'react';
import styles from '../styles';
const Hero = () => {
  return (
    <section
      id='hero'
      className={`flex md:flex-row flex-row ${styles.paddingY}`}
    >
      <div className='flex flex-col justify-between items-center w-full '>
        <h1 className='text-[30px] pl-[10px] ss:pl-[5px] font-poppins font-semibold ss:text-[45px] bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>
          Empower Your Trust, Defend Your Dreams
        </h1>
        <span className='pl-[10px] flex-1 font-poppins font-semibold ss:text-[50px] text-[30px] text-gradient'>
          Don't pave the way for Scammers
        </span>
        <p
          className={`${styles.paragraph} max-w-[950px] mt-5 pl-[10px] text-[13px] sm:text-[15px]`}
        >
          According to National Anti-Scam Centre $82.1 million is lost between
          October to December in 2023, Don't fall vitcim to scams. Learn to
          Identify and prevent it.
        </p>
        <div className='sm:flex w-[200px] justify-center items-center m-auto mt-[10px]'>
          <img
            className='w-[200px] h-[200px] relative z-[5] md:w-auto md:h-auto m-auto pt-[5px]'
            src='src/assets/scam.png'
          ></img>
        </div>
        <div className='absolute z-[0] w-[40%] h-[55%] top-0 pink__gradient' />
      </div>
    </section>
  );
};

export default Hero;
