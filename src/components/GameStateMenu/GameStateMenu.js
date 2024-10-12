import React from "react";
import Menu from "../Menu/Menu";
import BlueButton from "../BlueButton/BlueButton";
import styles from "./GameStateMenu.module.css";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { TOTAL_WRONG_GUESSES } from "../../constants";
import { getMenuProps, getNewPhraseFromData, setAllLetterToEnabled } from "../../helpers/game-helper";

function GameStateMenu({ setIsGameStateMenuVisible, imgClassName }) {
  const {
    alphabet,
    setAlphabet,
    setWrongGuessesCount,
    category,
    setCategory,
    gameStatus,
    setPhrase,
    jsonData,
  } = React.useContext(DataContext);
  let navigate = useNavigate();

  const handleContinueClick = () => {
    getNewPhraseFromData(category, jsonData, setPhrase);
    setIsGameStateMenuVisible(false);
    setAllLetterToEnabled(alphabet, setAlphabet);
    setWrongGuessesCount(TOTAL_WRONG_GUESSES);
  };

  const handleQuitClick = () => {
    window.location.reload(true);
  };

  const handleNewCategoryClick = () => {
    setIsGameStateMenuVisible(false);
    setWrongGuessesCount(TOTAL_WRONG_GUESSES);
    setCategory(null);
    let path = `/category`;
    navigate(path);
  };

  const menuProps = getMenuProps(gameStatus);

  return (
    <div className={styles.viewport}>
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
    </div>
  );
}

export default GameStateMenu;
