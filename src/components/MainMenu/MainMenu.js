import React from "react";
import styles from "./MainMenu.module.css";
import Menu from "../Menu/Menu";
import RoundButton from "../RoundButton/RoundButton";
import BlueButton from "../BlueButton/BlueButton";
import iconPlay from "../../assets/images/icon-play.svg";
import logo from "../../assets/images/logo.svg";

function MainMenu({setIsMainMenuVisible}) {
  const handlePlayButton = () => {
    setIsMainMenuVisible(false);
  }
  return (
    <Menu headingSrc={logo} alt="The Hangman game" imgClassName={styles.logo} wrapperClassName={styles.wrapper}>
      <RoundButton
      iconSrc={iconPlay}
      alt="Play"
      buttonStyles={styles.playButton}
      imgStyles={styles.playIcon}
      onClick={handlePlayButton}
    ></RoundButton>
      <BlueButton className={styles.blueButton}>HOW TO PLAY</BlueButton>
    </Menu>
  );
}

export default MainMenu;
