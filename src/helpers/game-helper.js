import { GAME_STATUS, STATUS, MAX_ROW_LENGTH } from "../constants";
import pausedHeading from "../assets/images/Paused.svg";
import winHeading from "../assets/images/You Win.svg";
import lostHeading from "../assets/images/You Lose.svg";

const winIfPhraseGuessed = (
  phrase,
  setGameStatus,
  setIsGameStateMenuVisible
) => {
  if (phrase) {
    let unselectedLetters = [];
    phrase.forEach((row) => {
      row.forEach((letter) => {
        if(letter.isSelected === false) {
          unselectedLetters.push(letter)
        }
      })
    });

    if (unselectedLetters.length === 0) {
      setGameStatus(GAME_STATUS.WIN);
      setIsGameStateMenuVisible(true);
      console.log(GAME_STATUS.WIN);
    }
  }
};

const setAllPhrasesFromCategoryToUnselected = (jsonData, category) => {
  if (!jsonData || !Array.isArray(jsonData.categories[category])) {
    return;
  }

  jsonData.categories[category].forEach((phrase) => {
    phrase.selected = false;
  });

  return jsonData.categories[category];
};

const getRandomPhraseFromUnselectedPhrases = (jsonData, category) => {
  if (!jsonData || !Array.isArray(jsonData.categories[category])) {
    return;
  }
  let unselectedPhrases = jsonData.categories[category].filter(
    (element) => element.selected !== true
  );

  if (!unselectedPhrases || unselectedPhrases.length < 1) {
    unselectedPhrases = setAllPhrasesFromCategoryToUnselected(
      jsonData,
      category
    );
  }

  const randomElementIndex = Math.floor(
    Math.random() * unselectedPhrases.length
  );
  const selectedPhrase = unselectedPhrases[randomElementIndex];

  return selectedPhrase;
};

const isLetter = (char) => {
  return char.toLowerCase() !== char.toUpperCase();
};

const splitPhraseIntoRows = (phrase) => {
  const phraseWordsArray = phrase.split(" ");
  let rows = [[]];
  let i = 0;

  phraseWordsArray.forEach((word) => {
    const wordLetterArray = word.split("");

    // if rows[i].length > 0 then include space " "
    let hasReachedMaxRowLength =
      rows[i].length + wordLetterArray.length + (rows[i].length > 0 ? 1 : 0) >
      MAX_ROW_LENGTH;

    if (hasReachedMaxRowLength) {
      i++;
      rows[i] = [];
    } else {
      if (rows[i].length > 0) {
        rows[i].push({
          letter: " ",
          isSelected: true,
        });
      }
    }

    wordLetterArray.forEach((letter) => {
      rows[i].push({
        letter: letter.toUpperCase(),
        isSelected: !isLetter(letter),
      });
    });
  });

  return rows;
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

  let foundLetter = [];

  const newPhrase = [...phrase];

  newPhrase.forEach((row) => {
    row.forEach((item) => {
      if(item.letter === letter) {
        foundLetter.push(item);
      }
    })
  });

  if (foundLetter && foundLetter.length > 0) {
    foundLetter.forEach((item) => (item.isSelected = true));
    setPhrase(newPhrase);
  }

  winIfPhraseGuessed(newPhrase, setGameStatus, setIsGameStateMenuVisible);

  return foundLetter.length > 0;
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

    setPhrase(() => splitPhraseIntoRows(selectedPhrase.name));

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

  if (clickedLetter.status === STATUS.DISABLED) {
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

export const findLongestTable = (tables) => {
  return tables.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, []);
};
