import React from "react";
import ProgressBar from "../ProgressBar";
import styles from "./HealthPanel.module.css";
import iconHeart from "../../assets/images/icon-heart.svg";
import { DataContext } from "../DataProvider/DataProvider";
import { TOTAL_WRONG_GUESSES } from "../../constants";

function HealthPanel() {
  const { wrongGuessesCount } = React.useContext(DataContext);

  return (
    <div className={styles.healthPanel}>
      <ProgressBar
        progress={wrongGuessesCount}
        total={TOTAL_WRONG_GUESSES}
        styles={styles}
      ></ProgressBar>
      <img src={iconHeart} alt="Heart icon" className={styles.iconHeart} />
    </div>
  );
}

export default HealthPanel;
