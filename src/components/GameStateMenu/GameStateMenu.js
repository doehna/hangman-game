import React from "react";
import Menu from "../Menu/Menu";
import BlueButton from "../BlueButton/BlueButton";
import styles from "./GameStateMenu.module.css";

function GameStateMenu({setIsGameStateMenuVisible, headingSrc, alt, imgClassName }) {
  const handleContinueClick = () => {
    setIsGameStateMenuVisible(false);
  }

  const handleQuitButton = () => {
    window.location.reload(true);
  }

  return (
    <Menu
      headingSrc={headingSrc}
      alt={alt}
      imgClassName={imgClassName}
      menuClassName={styles.menu}
      wrapperClassName={styles.wrapper}
    >
      <BlueButton className={styles.button} onClick={handleContinueClick}>CONTINUE</BlueButton>
      <BlueButton className={styles.button}>NEW CATEGORY</BlueButton>
      <BlueButton className={`gradient ${styles.button} ${styles.quitButton}`} onClick={handleQuitButton}>
        QUIT GAME
      </BlueButton>
    </Menu>
  );
}

export default GameStateMenu;
