import React from "react";
import RoundButton from "../RoundButton/RoundButton";
import HealthPanel from "../HealthPanel/HealthPanel";
import styles from "./Header.module.css";
import iconMenu from "../../assets/images/icon-menu.svg";

function Header({setIsGameStateMenuVisible}) {

  const handleHamburgerButton = () => {
    setIsGameStateMenuVisible(true);
  }

  return (
    <header className={styles.header}>
      <div className={styles.menu}>
        <RoundButton
          iconSrc={iconMenu}
          alt="Hamburger Menu"
          buttonStyles={styles.menuButton}
          imgStyles={styles.hamburgerIcon}
          onClick={handleHamburgerButton}
        ></RoundButton>
        <h1>Category</h1>
      </div>
      <HealthPanel className={styles.healthPanel}></HealthPanel>
    </header>
  );
}

export default Header;
