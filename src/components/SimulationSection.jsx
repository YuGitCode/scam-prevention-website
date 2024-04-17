import React from "react";
import styles, { layout } from "../styles";
import Button from "./Buttons";
import useOnScreen from "./useOnScreen";
import simulationImg from "../assets/sim.png";
const SimulationSection = () => {
  const [ref, isVisible] = useOnScreen({
    threshold: 0.5, // Trigger when 50% of the element is in view
  });
  return (
    <section className={`${layout.section} mt-20`}>
      <div
        ref={ref}
        className={`${layout.section}  ${
          isVisible ? "animate-fadeInUp" : "opacity-0"
        }`}
      >
        <div className={layout.sectionImg}>
          <img src={simulationImg} className='w-[700px] h-[600x] mr-[50px]' />
        </div>
        <div ref={ref} className={`${layout.sectionInfo} pl-[20px]`}>
          <h2 className={styles.heading3}>
            Experience simulated scam scenarios
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Dive into our comprehensive statistics and uncover the trends that
            could affect you. whether you're interested in seeing how scams vary
            by age,gender,type or state. We have a full breakdown providing a
            detailed and clear informative perspective. Click here to see where
            you or your loved ones might be most vulnerable and stay one step
            ahead of the scammers
          </p>

          <Button styles='mt-10' />
        </div>
      </div>
    </section>
  );
};

export default SimulationSection;
