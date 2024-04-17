import React from "react";
import styles from "../styles";
import Hero from "../components/Hero";
import DataSection from "../components/DataSection";
import SimulationSection from "../components/SimulationSection";

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
    </>
  );
};

export default Homepage;
