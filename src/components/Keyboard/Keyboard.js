import React from "react";
import Letter from "../Letter/Letter";
import Button from "../Button/Button";
import styles from "./Keyboard.module.css";
import { DataContext } from "../DataProvider/DataProvider";
import { STATUS } from "../../constants";
import {
  handleLetterSelected,
  setAllLetterToEnabled,
} from "../../helpers/game-helper";
import useKeyDown from "../../hooks/useKeyDown";

function Keyboard({ isBlocked = false }) {
  const {
    alphabet,
    setAlphabet,
    wrongGuessesCount,
    setWrongGuessesCount,
    phrase,
    setPhrase,
    setIsGameStateMenuVisible,
    setGameStatus,
  } = React.useContext(DataContext);

  React.useEffect(() => {
    setAllLetterToEnabled(alphabet, setAlphabet);
  }, []);

  const handleClick = (event) => {
    let id = event.target.id || event.target.parentElement.id;

    handleLetterSelected(
      id,
      alphabet,
      setAlphabet,
      phrase,
      setPhrase,
      setGameStatus,
      setIsGameStateMenuVisible,
      wrongGuessesCount,
      setWrongGuessesCount
    );
  };

  const handleKeyDown = (event) => {
    if (event.code === `Key${event.key.toUpperCase()}`) {
      handleLetterSelected(
        event.key.toUpperCase(),
        alphabet,
        setAlphabet,
        phrase,
        setPhrase,
        setGameStatus,
        setIsGameStateMenuVisible,
        wrongGuessesCount,
        setWrongGuessesCount
      );
    }
  };

  useKeyDown(handleKeyDown);

  return (
    <ol className={styles.keyboard}>
      {alphabet.map((letter, index) => {
        return (
          <li key={index}>
            <Button
              id={letter.letter}
              onClick={(event) => handleClick(event)}
              className={`${styles.letter} ${
                isBlocked || letter.status === STATUS.DISABLED
                  ? styles.disabled
                  : ""
              }`}
              disabled={isBlocked || letter.status === STATUS.DISABLED}
            >
              <Letter>{letter.letter}</Letter>
            </Button>
          </li>
        );
      })}
    </ol>
  );
}

export default Keyboard;
