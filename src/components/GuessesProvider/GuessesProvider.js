import React from "react";
import { TOTAL_WRONG_GUESSES } from "../../constants";

export const WrongGuessesContext = React.createContext();

function GuessesProvider({children}) {
  const [wrongGuessesCount, setWrongGuessesCount] =
    React.useState(TOTAL_WRONG_GUESSES);
  const value = { wrongGuessesCount, setWrongGuessesCount };

  return(
    <WrongGuessesContext.Provider value={value}>
      {children}
    </WrongGuessesContext.Provider>
  )
}

export default GuessesProvider;