import React from "react";
import Letter from "../Letter/Letter";
import styles from "./Phrase.module.css";

function Phrase({phrase}) {
  if (typeof phrase == !"string") {
    throw new Error("Incorrect phrase type. Phrase dhould always be string");
  }

  const mapStringToArray = (str) => {
    return str.split('');
  };

  const phraseArray = mapStringToArray(phrase);

  return (
    <ol className={styles.phrase}>
      {phraseArray.map((letter, index) => {
        return (
          <li key={index}>
            <Letter isHidden={true} styles={styles}>{letter.toUpperCase()}</Letter>
          </li>
        );
      })}
    </ol>
  );
}

export default Phrase;
