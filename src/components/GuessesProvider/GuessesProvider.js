import React from "react";
import { TOTAL_WRONG_GUESSES, ALPHABET, STATUS } from "../../constants";

export const WrongGuessesContext = React.createContext();

function GuessesProvider({ children }) {
  const [wrongGuessesCount, setWrongGuessesCount] =
    React.useState(TOTAL_WRONG_GUESSES);

  const [alphabet, setAlphabet] = React.useState(() => {
    return ALPHABET.map((letter) => {
      return {
        letter: letter,
        status: STATUS.ENABLED,
      };
    });
  });

  const value = {
    wrongGuessesCount,
    setWrongGuessesCount,
    alphabet,
    setAlphabet
  };

  return (
    <WrongGuessesContext.Provider value={value}>
      {children}
    </WrongGuessesContext.Provider>
  );
}

export default GuessesProvider;
