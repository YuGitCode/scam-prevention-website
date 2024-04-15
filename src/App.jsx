import React, { useState, useEffect } from 'react';
import styles from './styles';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import DataSection from './components/DataSection';

const App = () => {
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
      <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <DataSection />
        </div>
      </div>
    </>
  );
};

export default App;
