import React from "react";
import RoundButton from "../RoundButton/RoundButton";
import styles from "./Header.module.css";
import { DataContext } from "../DataProvider/DataProvider";

function Header({ className, handleRoundButton, children, buttonIconSrc, buttonAlt, ...delegated }) {
  const { category } = React.useContext(DataContext);


  return (
      <header className={`${styles.header} ${className}`}>
        <RoundButton
          iconSrc={buttonIconSrc}
          alt={buttonAlt}
          buttonStyles={styles.roundButton}
          imgStyles={styles.icon}
          onClick={handleRoundButton} {...delegated}
        ></RoundButton>
        <h1>{children}</h1>
    </header>
  );
}

export default Header;
