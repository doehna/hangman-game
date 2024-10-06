import React from "react";
import Letter from "../Letter/Letter";
import styles from "./Phrase.module.css";
import { DataContext } from "../DataProvider/DataProvider";

function Phrase() {
  const { phrase } = React.useContext(DataContext);

  return (
    <ol className={styles.phrase}>
      {phrase.map((letter, index) => {
        return (
          <li key={index}>
            <Letter isHidden={!letter.isSelected} styles={styles}>
              {letter.letter.toUpperCase()}
            </Letter>
          </li>
        );
      })}
    </ol>
  );
}

export default Phrase;
