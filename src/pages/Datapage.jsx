import React from "react";
import Barchart from "../components/Barchart";
import styles from "../styles";
import DonutChart from "../components/DonutChart";
import BarchartT10S from "../components/BarchartT10S";
import BarchartT10SL from "../components/BarchartT10SL";
import BarchartMonthly from "../components/BarchartMonthly";

const Datapage = () => {
  return (
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Barchart />
        <DonutChart />
        <BarchartT10S />
        <BarchartT10SL />
        <BarchartMonthly />
      </div>
    </div>
  );
};

export default Datapage;
