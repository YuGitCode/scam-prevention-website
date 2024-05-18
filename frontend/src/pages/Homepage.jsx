import React from "react";
import styles from "../styles";
import Hero from "../components/Homepage/Hero.jsx";
import ReportSection from "../components/Homepage/ReportSection.jsx";
import SectionCards from "../components/Homepage/SectionCards.jsx";
import scrollToTop from "../components/scrollToTop.jsx";
//This is the Homepage, where we display and introduce the website functionality.
const Homepage = () => {
  scrollToTop(); //Scrolls to the top when page change

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
        {/* This is the Linke to all section */}
        <div className={`${styles.boxWidth}`}>
          <SectionCards />
        </div>
      </div>

      {/* This is the Report section */}
      <div
        className={`bg-gradient-to-r from-blue-800 to-indigo-900 ${styles.paddingX} ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth}`}>
          <ReportSection />
        </div>
      </div>
    </>
  );
};

export default Homepage;
