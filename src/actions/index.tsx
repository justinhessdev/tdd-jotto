export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS'
}

interface ITypes {
  type: string
}

/**
 * @function correctGuess
 * @returns {object} - Action object with type 'CORRECT_GUESS
 */
export function correctGuess(): ITypes {
  return { type: actionTypes.CORRECT_GUESS }
}
