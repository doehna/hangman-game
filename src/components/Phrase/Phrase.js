import React from "react";
import Letter from "../Letter/Letter";
import styles from "./Phrase.module.css";
import { DataContext } from "../DataProvider/DataProvider";

function Phrase() {
  const {phrase} = React.useContext(DataContext);
  if (typeof phrase !== "string") {
    throw new Error("Incorrect phrase type. Phrase should always be string");
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
