export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD'
}

interface ITypes {
  type: string
}

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 * and conditionally CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord  - Guessed word
 */
export const guessWord = (guessedWord) => {
  return function (dispatch, getState) {}
}
