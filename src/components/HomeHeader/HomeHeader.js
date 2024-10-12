import React from "react";
import Header from "../Header/Header";
import iconMenu from "../../assets/images/icon-menu.svg";
import HealthPanel from "../HealthPanel/HealthPanel";
import styles from "./HomeHeader.module.css";
import { DataContext } from "../DataProvider/DataProvider";

function HomeHeader({ setIsGameStateMenuVisible }) {
  const { category } = React.useContext(DataContext);
  const handleHamburgerButton = () => {
    setIsGameStateMenuVisible(true);
  };

  return (
    <div className={styles.menu}>
      <Header
        handleRoundButton={handleHamburgerButton}
        buttonIconSrc={iconMenu}
        buttonAlt="Hamburger menu"
      >
        {category}
      </Header>
      <HealthPanel className={styles.healthPanel}></HealthPanel>
    </div>
  );
}

export default HomeHeader;
