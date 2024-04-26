import React from "react";
import styles from "../styles";
import Hero from "../components/Homepage/Hero.jsx";
import DataSection from "../components/Homepage/DataSection.jsx";
import SimulationSection from "../components/Homepage/SimulationSection.jsx";

//This is the Homepage, where we display and introduce the website functionality.
const Homepage = () => {
  return (
    <>
      <div
        className={`bg-gradient-to-r from-blue-800 to-indigo-900 ${styles.flexStart}`}
      >
        {/* This is the Hero section */}
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div
        className={`bg-gradient-to-r from-blue-800 to-indigo-900 ${styles.paddingX} ${styles.flexStart}`}
      >
        {/* This is the Data section */}
        <div className={`${styles.boxWidth}`}>
          <DataSection />
        </div>
      </div>

      {/* This is the Simulation section */}
      <div
        className={`bg-gradient-to-r from-blue-800 to-indigo-900 ${styles.paddingX} ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth}`}>
          <SimulationSection />
        </div>
      </div>
    </>
  );
};

export default Homepage;
