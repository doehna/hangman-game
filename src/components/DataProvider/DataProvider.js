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
  const [isLoadingState, setIsLoadingState] = React.useState(false);
  const [phrase, setPhrase] = React.useState(null);
  const [category, setCategory] = React.useState(null);
  const [categories, setCategories] = React.useState([]);

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

  const setElementAsSelected = (selectedPhrase) => {
    if (category) {
      const newData = { ...jsonData.categories };
      const selectedElement = newData[category].find(
        (item) => item.name === selectedPhrase.name
      );
      if (selectedElement) {
        selectedElement.selected = true;
      }
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

  const mapPhraseLetters = (phrase) => {
    const phraseLetterArray = phrase.split("");
    return phraseLetterArray.map((letter) => {
      return {
        letter: letter.toUpperCase(),
        isSelected: false,
      };
    });
  };

  React.useEffect(() => {
    if (jsonData) {
      getCategoriesList(jsonData);
      if (category) {
        const selectedPhrase = getRandomPhraseFromUnselectedPhrases();

        setPhrase(() => mapPhraseLetters(selectedPhrase.name));

        console.log(selectedPhrase);
        setElementAsSelected(selectedPhrase);
      }
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
    phrase,
    setPhrase,
    isLoading: isLoadingState,
    category,
    setCategory,
    categories,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default DataProvider;
