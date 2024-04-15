import React from 'react';
import { stats } from '../constants';
import styles from '../styles';
const DataSection = () => {
  return (
    <>
      <div className='flex-1 justify-center items-center flex-row'>
        <div className='mx-auto flex-1 justify-center items-center flex-row'>
          <h4 className='flex justify-center font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>
            Scams occured in Australia in 2024
          </h4>
        </div>

        <section
          className={`${styles.flexCenter}flex-row flex-wrap sm:mb-20 mb-6`}
        >
          {stats.map((stat) => (
            <div
              key={stat.id}
              className='flex-1 flex justify-start items-center md:flex-row flex-col m-3'
            >
              <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>
                {stat.value}
              </h4>
              <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>
                {stat.title}
              </p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default DataSection;
