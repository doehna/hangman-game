import React from "react";
import {
  TOTAL_WRONG_GUESSES,
  ALPHABET,
  STATUS,
  ENDPOINT,
} from "../../constants";
import useFetch from "../../hooks/useFetch";

export const DataContext = React.createContext();
const category = "Movies";

function DataProvider({ children }) {
  const { jsonData, isLoading } = useFetch(ENDPOINT);
  const [data, setData] = React.useState(null);
  const [isLoadingState, setIsLoadingState] = React.useState(false);
  const [phrase, setPhrase] = React.useState(null);

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

  React.useEffect(() => {
    const setElementAsSelected = (category, phrase) => {
      const newData = { ...jsonData };
      const selectedElement = newData.categories[category].find(
        (item) => item.name === phrase.name
      );
      if (selectedElement) {
        selectedElement.selected = true;
        setData(newData);
        console.log(newData);
      }
    };

    if (!jsonData || !Array.isArray(jsonData.categories[category])) {
      return;
    }
    const unselectedPhrases = jsonData.categories[category].filter(
      (element) => element.selected !== true
    );
    const randomElementIndex = Math.floor(
      Math.random() * unselectedPhrases.length
    );
    const selectedPhrase = unselectedPhrases[randomElementIndex];

    setPhrase(selectedPhrase);
    console.log(selectedPhrase);
    setElementAsSelected(category, selectedPhrase);
  }, [jsonData]);

  React.useEffect(() => {
    setIsLoadingState(isLoading);
  }, [isLoading]);

  const value = {
    wrongGuessesCount,
    setWrongGuessesCount,
    alphabet,
    setAlphabet,
    phrase,
    isLoading: isLoadingState,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default DataProvider;
