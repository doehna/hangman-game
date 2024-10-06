export const isLetterInPhrase = (letter, phrase, setPhrase) => {
  if (!Array.isArray(phrase)) {
    return;
  }

  const newPhrase = [...phrase];

  const foundLetter = newPhrase.filter((item) => item.letter === letter);

  if (foundLetter && foundLetter.length > 0) {
    foundLetter.forEach((item) => item.isSelected = true);
    setPhrase(newPhrase);
  }

  return foundLetter.length > 0;
};
