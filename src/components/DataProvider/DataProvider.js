import React from "react";
import {
  TOTAL_WRONG_GUESSES,
  ALPHABET,
  STATUS,
  ENDPOINT,
  GAME_STATUS,
} from "../../constants";
import useFetch from "../../hooks/useFetch";
import { getNewPhraseFromData } from "../../helpers/game-helper";

export const DataContext = React.createContext();

function DataProvider({ children }) {
  const { jsonData, isLoading } = useFetch(ENDPOINT);
  const [isLoadingState, setIsLoadingState] = React.useState(false);
  const [phrase, setPhrase] = React.useState(null);
  const [category, setCategory] = React.useState(null);
  const [categories, setCategories] = React.useState([]);
  const [isMainMenuVisible, setIsMainMenuVisible] = React.useState(true);
  const [gameStatus, setGameStatus] = React.useState(GAME_STATUS.IN_PROGRESS);
  const [isGameStateMenuVisible, setIsGameStateMenuVisible] =
    React.useState(false);

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

  const getCategoriesList = (json) => {
    setCategories(Object.keys(json["categories"]));
  };

  React.useEffect(() => {
    if (jsonData) {
      getCategoriesList(jsonData);
    }
  }, [jsonData]);

  React.useEffect(() => {
    setIsLoadingState(isLoading);
  }, [isLoading]);

  React.useEffect(() => {
    getNewPhraseFromData(category, jsonData, setPhrase);
  }, [category]);

  const value = {
    wrongGuessesCount,
    setWrongGuessesCount,
    alphabet,
    setAlphabet,
    phrase,
    setPhrase,
    isLoading: isLoadingState,
    category,
    setCategory,
    categories,
    isMainMenuVisible,
    setIsMainMenuVisible,
    gameStatus,
    setGameStatus,
    isGameStateMenuVisible,
    setIsGameStateMenuVisible,
    jsonData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default DataProvider;
