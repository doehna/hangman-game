import React from "react";
import Letter from "../Letter/Letter";
import Button from "../Button/Button";
import styles from "./Keyboard.module.css";
import { DataContext } from "../DataProvider/DataProvider";
import { STATUS } from "../../constants";
import { isLetterInPhrase } from "../../helpers/game-helper";
import useKeyDown from "../../hooks/useKeyDown";

function Keyboard({ isBlocked = false }) {
  const {
    alphabet,
    setAlphabet,
    wrongGuessesCount,
    setWrongGuessesCount,
    phrase,
    setPhrase,
  } = React.useContext(DataContext);

  const handleLetterSelected = (letter) => {
    const newAlphabet = [...alphabet];
    let clickedLetter = newAlphabet.find((obj) => obj.letter === letter);
    clickedLetter.status = STATUS.DISABLED;

    setAlphabet(newAlphabet);

    const isGuessCorrect = isLetterInPhrase(letter, phrase, setPhrase);

    if (isGuessCorrect) {
      return;
    }

    if (wrongGuessesCount > 0) {
      if (wrongGuessesCount === 1) {
        window.alert("You lost");
      }
      setWrongGuessesCount(wrongGuessesCount - 1);
    }
  };

  const handleClick = (event) => {
    let id = event.target.id || event.target.parentElement.id;

    handleLetterSelected(id);
  };

  const handleKeyDown = (event) => {
    if (event.code === `Key${event.key.toUpperCase()}`) {
      handleLetterSelected(event.key.toUpperCase());
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
