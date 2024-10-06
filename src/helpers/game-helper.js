

export const isLetterInPhrase = (letter, phrase) => {
    if(typeof phrase !== "string") {
        throw new Error("Incorrect phrase type. Phrase should always be string");
    }

    return phrase.indexOf(letter) >= 0;
}