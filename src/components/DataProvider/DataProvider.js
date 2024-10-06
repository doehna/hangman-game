import React from "react";
import {
  TOTAL_WRONG_GUESSES,
  ALPHABET,
  STATUS,
  ENDPOINT,
} from "../../constants";
import useFetch from "../../hooks/useFetch";

export const DataContext = React.createContext();

function DataProvider({ children }) {
  const { jsonData, isLoading } = useFetch(ENDPOINT);
  //const [data, setData] = React.useState(null);
  const [isLoadingState, setIsLoadingState] = React.useState(false);
  const [phrase, setPhrase] = React.useState(null);
  const [category] = React.useState("Movies");

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

  const setElementAsSelected = (selectedPhrase) => {
    const newData = {...jsonData.categories};
    const selectedElement = newData[category].find(
      (item) => item.name === selectedPhrase.name
    );
    if (selectedElement) {
      selectedElement.selected = true;
    }
  };

  const getRandomPhraseFromUnselectedPhrases = () => {
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

    return selectedPhrase;
  };

  React.useEffect(() => {
    if (jsonData) {
      const selectedPhrase = getRandomPhraseFromUnselectedPhrases();

      setPhrase(selectedPhrase);
      console.log(selectedPhrase);
      setElementAsSelected(selectedPhrase);
    }
  }, [jsonData]);

  React.useEffect(() => {
    setIsLoadingState(isLoading);
  }, [isLoading]);

  const value = {
    wrongGuessesCount,
    setWrongGuessesCount,
    alphabet,
    setAlphabet,
    phrase: (phrase && phrase.name) ? phrase.name.toUpperCase() : null,
    isLoading: isLoadingState,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default DataProvider;
