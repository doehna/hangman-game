import React from "react";
import Menu from "../Menu/Menu";
import BlueButton from "../BlueButton/BlueButton";
import styles from "./GameStateMenu.module.css";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { TOTAL_WRONG_GUESSES, GAME_STATUS } from "../../constants";
import {getMenuProps} from "../../helpers/game-helper"

function GameStateMenu({
  setIsGameStateMenuVisible,
  imgClassName,
}) {
  const { setWrongGuessesCount, setCategory, gameStatus } = React.useContext(DataContext);
  let navigate = useNavigate();

  const handleContinueClick = () => {
    setIsGameStateMenuVisible(false);
  };

  const handleQuitClick = () => {
    window.location.reload(true);
  };

  const handleNewCategoryClick = () => {
    setWrongGuessesCount(TOTAL_WRONG_GUESSES);
    setCategory(null);
    let path = `/category`;
    navigate(path);
  };

  const menuProps = getMenuProps(gameStatus);

  return (
    <Menu
      headingSrc={menuProps.headingSrc}
      alt={menuProps.alt}
      imgClassName={imgClassName}
      menuClassName={styles.menu}
      wrapperClassName={styles.wrapper}
    >
      <BlueButton className={styles.button} onClick={handleContinueClick}>
        CONTINUE
      </BlueButton>
      <BlueButton className={styles.button} onClick={handleNewCategoryClick}>
        NEW CATEGORY
      </BlueButton>
      <BlueButton
        className={`gradient ${styles.button} ${styles.quitButton}`}
        onClick={handleQuitClick}
      >
        QUIT GAME
      </BlueButton>
    </Menu>
  );
}

export default GameStateMenu;
