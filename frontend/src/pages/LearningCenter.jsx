import React from "react";
import styles from "../styles";

import PwdGenerator from "../components/LearningCenter/PwdGenerator";
import Guide from "../components/LearningCenter/Guide";
import WordCloud from "../components/LearningCenter/WordCloud";

import InformationCards from "../components/LearningCenter/InformationCards";
import PassGenSection from "../components/LearningCenter/PassGenSection";
import PredictSection from "../components/LearningCenter/PredictSection";
import scrollToTop from "../components/scrollToTop";
import ScamCaseAccordin from "../components/LearningCenter/ScamCaseAccordin";

const LearningCenter = () => {
  scrollToTop(); //Scrolls to the top when page change
  //This shows each sections in te Learning center page.
  return (
    <div className={`${styles.flexCenter} bg-gray-100`}>
      <div className={`w-full`}>
        <InformationCards />

        <PassGenSection />
        <ScamCaseAccordin />

        <WordCloud />

        <PredictSection />
      </div>
    </div>
  );
};

export default LearningCenter;
