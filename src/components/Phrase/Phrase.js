import React from "react";
import Letter from "../Letter/Letter";
import styles from "./Phrase.module.css";
import "../../global.css";
import { DataContext } from "../DataProvider/DataProvider";
import {findLongestTable} from "../../helpers/game-helper"

const listRef = React.createRef();

function Phrase() {
  const { phrase } = React.useContext(DataContext);
  // const [width, setWidth] = React.useState(listRef.current ? listRef.current.offsetWidth : null);

  const maxNumberOfLetters = findLongestTable(phrase).length;

  React.useEffect(() => { 
    document.documentElement.style.setProperty('--numberOfLetters', maxNumberOfLetters);
  }, [phrase])

  //const letterWidth = width/longestTable - 8;
  return (
    <ol className={styles.phrase} ref={listRef}>
      {phrase.map((row, rowIndex) => {
        return (
          <div
            key={rowIndex}
            className={styles.row}
            style={{
              gridTemplateColumns: `repeat(${row[rowIndex].length}, minmax(40px, 1fr))`,
              gridTemplateRows: `"1fr"`,
            }}
          >
            {row.map((letter, letterIndex) => {
              return (
                <li key={letterIndex} style={{gridColumn: `${letterIndex+1}`}}>
                  <Letter
                    isHidden={!letter.isSelected}
                    className={`blueRectangle ${styles.letter}`}
                  >
                    {letter.letter}
                  </Letter>
                </li>
              );
            })}
          </div>
        );
      })}
    </ol>
  );
}

export default Phrase;
