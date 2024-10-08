import React from "react";
import Menu from "../Menu/Menu";
import BlueButton from "../BlueButton/BlueButton";
import styles from "./GameStateMenu.module.css";
import { useNavigate } from "react-router-dom";

function GameStateMenu({setIsGameStateMenuVisible, headingSrc, alt, imgClassName }) {
  let navigate = useNavigate(); 

  const handleContinueClick = () => {
    setIsGameStateMenuVisible(false);
  }

  const handleQuitClick = () => {
    window.location.reload(true);
  }

  const handleNewCategoryClick = () => {
      let path = `/category`; 
      navigate(path);
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
      <BlueButton className={styles.button} onClick={handleNewCategoryClick}>NEW CATEGORY</BlueButton>
      <BlueButton className={`gradient ${styles.button} ${styles.quitButton}`} onClick={handleQuitClick}>
        QUIT GAME
      </BlueButton>
    </Menu>
  );
}

export default GameStateMenu;
