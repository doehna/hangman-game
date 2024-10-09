import React from "react";
import styles from "./MainMenu.module.css";
import Menu from "../Menu/Menu";
import RoundButton from "../RoundButton/RoundButton";
import BlueButton from "../BlueButton/BlueButton";
import iconPlay from "../../assets/images/icon-play.svg";
import logo from "../../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

function MainMenu() {
  let navigate = useNavigate();
  const { setIsMainMenuVisible } = React.useContext(DataContext);

  const handlePlayButton = () => {
    setIsMainMenuVisible(false);
    let path = `/category`;
    navigate(path);
  };
  return (
    <Menu
      headingSrc={logo}
      alt="The Hangman game"
      imgClassName={styles.logo}
      wrapperClassName={styles.wrapper}
    >
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
