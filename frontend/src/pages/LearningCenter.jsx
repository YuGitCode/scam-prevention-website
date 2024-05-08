import React from "react";
import styles from "../styles";
import PwdGenerator from "../components/LearningCenter/PwdGenerator";
import Guide from "../components/LearningCenter/Guide";
import DataModeling from "../components/LearningCenter/DataModeling";
import InformationCards from "../components/LearningCenter/InformationCards";
import PassGenSection from "../components/LearningCenter/PassGenSection";

const LearningCenter = () => {
  return (
    <div className={`${styles.flexCenter} bg-gray-100`}>
      <div className={`w-full`}>

        <InformationCards />

        <PassGenSection />

        <DataModeling />
      </div>
    </div>
  );
};

export default LearningCenter;
