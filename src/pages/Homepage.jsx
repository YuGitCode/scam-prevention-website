import React, { useState, useEffect } from 'react';
import styles from '../styles';
import Navbar from '../components/NavBar';
import Hero from '../components/Hero';
import DataSection from '../components/DataSection';
import SimulationSection from '../components/SimulationSection';
import Datapage from '../pages/Datapage';

const Homepage = () => {
  return (
    <>
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
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <SimulationSection />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <Datapage />
      </div>
    </>
  );
};

export default Homepage;
