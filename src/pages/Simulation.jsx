import React from 'react';

const Simulation = () => {
  return (
    <div className='w-full'>
      <iframe
        src='https://fit5120.github.io/anti-fraud/'
        title='anti fraud game'
        className='w-full border-0'
        style={{ height: 'calc(100vh - 80px)' }}
      />
    </div>
  );
};

export default Simulation;
