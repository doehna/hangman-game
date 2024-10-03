import React from "react";
import Letter from "../Letter/Letter";
import styles from "./Phrase.module.css";

function Phrase({ phrase }) {
  if (typeof phrase == !"string") {
    throw new Error("Incorrect phrase type. Phrase dhould always be string");
  }

  const mapStringToArray = (str) => {
    return str.split("");
  };

  const phraseArray = mapStringToArray(phrase);

  console.log(typeof phraseArray);

  return (
    <ol>
      {phraseArray.map((letter, index) => {
        return (
          <Letter key={index} styles={styles}>
            {letter.toUpperCase()}
          </Letter>
        );
      })}
    </ol>
  );
}

export default Phrase;
