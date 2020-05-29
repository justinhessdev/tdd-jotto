/**
 * @method getLetterMatchCount
 * @param {string} guessedWord
 * @param secretWord
 * @returns {number} - Number of letters matched between guessed word and secret word
 */
export function getLetterMatchCount(
  guessedWord: string,
  secretWord: string
): number {
  const secretLetterSet = new Set(secretWord.split(''))
  const guessedLetterSet = new Set(guessedWord.split(''))
  return [...secretLetterSet].filter((letter) => guessedLetterSet.has(letter))
    .length
}
