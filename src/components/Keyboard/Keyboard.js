import React from "react";
import Letter from "../Letter/Letter";
import Button from "../Button/Button";
import styles from "./Keyboard.module.css";
import { DataContext } from "../DataProvider/DataProvider";
import {STATUS} from '../../constants';

function Keyboard({isBlocked = false}) {
  const { alphabet, setAlphabet } = React.useContext(DataContext);

  const handleClick = (event) => {
    let id = event.target.id || event.target.parentElement.id;

    const newAlphabet = [...alphabet];
    let clickedLetter = newAlphabet.find(obj => obj.letter === id);
    clickedLetter.status = STATUS.DISABLED;

    setAlphabet(newAlphabet);
  };

  return (
    <ol className={styles.keyboard}>
      {alphabet.map((letter, index) => {
        return (
          <li key={index}>
            <Button
              id={letter.letter}
              onClick={(event) => handleClick(event)}
              className={`${styles.letter} ${
                isBlocked || letter.status === STATUS.DISABLED ? styles.disabled : ""
              }`}
              disabled={isBlocked || letter.status === STATUS.DISABLED}
            >
              <Letter >{letter.letter}</Letter>
            </Button>
          </li>
        );
      })}
    </ol>
  );
}

export default Keyboard;
