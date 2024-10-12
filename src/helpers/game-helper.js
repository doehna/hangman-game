import { GAME_STATUS, STATUS } from "../constants";
import pausedHeading from "../assets/images/Paused.svg";
import winHeading from "../assets/images/You Win.svg";
import lostHeading from "../assets/images/You Lose.svg";

const winIfPhraseGuessed = (
  phrase,
  setGameStatus,
  setIsGameStateMenuVisible
) => {
  if (phrase) {
    const unselectedLetters = phrase.filter(
      (letter) => letter.isSelected === false
    );

    if (unselectedLetters.length === 0) {
      setGameStatus(GAME_STATUS.WIN);
      setIsGameStateMenuVisible(true);
      console.log(GAME_STATUS.WIN);
    }
  }
};

export const isLetterInPhrase = (
  letter,
  phrase,
  setPhrase,
  setGameStatus,
  setIsGameStateMenuVisible
) => {
  if (!Array.isArray(phrase)) {
    return;
  }

  const newPhrase = [...phrase];

  const foundLetter = newPhrase.filter((item) => item.letter === letter);

  if (foundLetter && foundLetter.length > 0) {
    foundLetter.forEach((item) => (item.isSelected = true));
    setPhrase(newPhrase);
  }

  winIfPhraseGuessed(newPhrase, setGameStatus, setIsGameStateMenuVisible);

  return foundLetter.length > 0;
};

const getRandomPhraseFromUnselectedPhrases = (jsonData, category) => {
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

const isLetter = (char) => {
  return char.toLowerCase() !== char.toUpperCase();
}

const mapPhraseLetters = (phrase) => {
  const phraseLetterArray = phrase.split("");
  return phraseLetterArray.map((letter) => {
    return {
      letter: letter.toUpperCase(),
      isSelected: !isLetter(letter),
    };
  });
};

export const setPhraseAsSelected = (jsonData, category, selectedPhrase) => {
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

export const getNewPhraseFromData = (category, jsonData, setPhrase) => {
  if (category) {
    const selectedPhrase = getRandomPhraseFromUnselectedPhrases(
      jsonData,
      category
    );

    setPhrase(() => mapPhraseLetters(selectedPhrase.name));

    console.log(selectedPhrase);
    setPhraseAsSelected(jsonData, category, selectedPhrase);
  }
};

export const getMenuProps = (gameStatus) => {
  if (gameStatus === GAME_STATUS.WIN) {
    return {
      headingSrc: winHeading,
      alt: "You won",
    };
  }

  if (gameStatus === GAME_STATUS.LOSE) {
    return {
      headingSrc: lostHeading,
      alt: "You lose",
    };
  }

  return {
    headingSrc: pausedHeading,
    alt: "Paused",
  };
};

export const setAllLetterToEnabled = (alphabet, setAlphabet) => {
  const newAlphabet = alphabet.map((letter) => {
    return {
      status: STATUS.ENABLED,
      letter: letter.letter,
    };
  });

  setAlphabet(newAlphabet);
};

export const handleLetterSelected = (
  letter,
  alphabet,
  setAlphabet,
  phrase,
  setPhrase,
  setGameStatus,
  setIsGameStateMenuVisible,
  wrongGuessesCount,
  setWrongGuessesCount
) => {
  const newAlphabet = [...alphabet];
  let clickedLetter = newAlphabet.find((obj) => obj.letter === letter);

  if(clickedLetter.status === STATUS.DISABLED) {
    return;
  }

  clickedLetter.status = STATUS.DISABLED;

  setAlphabet(newAlphabet);

  const isGuessCorrect = isLetterInPhrase(
    letter,
    phrase,
    setPhrase,
    setGameStatus,
    setIsGameStateMenuVisible
  );

  if (isGuessCorrect) {
    return;
  }

  if (wrongGuessesCount > 0) {
    if (wrongGuessesCount === 1) {
      setGameStatus(GAME_STATUS.LOSE);
      setIsGameStateMenuVisible(true);
      console.log(GAME_STATUS.LOSE);
    }
    setWrongGuessesCount(wrongGuessesCount - 1);
  }
};
