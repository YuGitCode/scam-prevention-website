import React from "react";
import Barchart from "../components/Barchart";
import styles from "../styles";

const Datapage = () => {
  return (
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Barchart />
      </div>
    </div>
  );
};

export default Datapage;
