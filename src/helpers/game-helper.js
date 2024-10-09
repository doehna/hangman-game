import { GAME_STATUS } from "../constants";
import pausedHeading from "../assets/images/Paused.svg";
import winHeading from "../assets/images/You Win.svg";
import lostHeading from "../assets/images/You Lose.svg";

const winIfPhraseGuessed = (phrase, setGameStatus, setIsGameStateMenuVisible) => {
  if (phrase) {
    const unselectedLetters = phrase.filter((letter) => letter.isSelected === false)

    if (unselectedLetters.length === 0) {
      setGameStatus(GAME_STATUS.WIN);
      setIsGameStateMenuVisible(true);
      console.log(GAME_STATUS.WIN)
    }
  }
}

export const isLetterInPhrase = (letter, phrase, setPhrase, setGameStatus, setIsGameStateMenuVisible) => {
  if (!Array.isArray(phrase)) {
    return;
  }

  const newPhrase = [...phrase];

  const foundLetter = newPhrase.filter((item) => item.letter === letter);

  if (foundLetter && foundLetter.length > 0) {
    foundLetter.forEach((item) => item.isSelected = true);
    setPhrase(newPhrase);
  }

  winIfPhraseGuessed(newPhrase, setGameStatus, setIsGameStateMenuVisible);

  return foundLetter.length > 0;
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