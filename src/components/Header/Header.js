import React from "react";
import Button from "../Button/Button";
import HealthPanel from "../HealthPanel/HealthPanel";
import styles from "./Header.module.css";
import iconMenu from '../../assets/images/icon-menu.svg';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.menu}>
        <Button className={styles.menuButton}><img src={iconMenu} alt="obrazek" className={styles.hamburgerIcon} /></Button>
        <h1>Category</h1>
      </div>
      <HealthPanel className={styles.healthPanel}></HealthPanel>
    </header>
  );
}

export default Header;
