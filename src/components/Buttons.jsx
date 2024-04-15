import React from 'react';

const Buttons = ({ styles }) => {
  return (
    <button
      type='button'
      className={`hover:focus rounded-[10px] py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient outline-none ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Buttons;
