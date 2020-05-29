import React from 'react'
import PropTypes from 'prop-types'

interface IProps {
  guessedWords: Array<{ guessedWord: string; letterMatchCount: number }>
}

const GuessedWords = (props: IProps) => {
  const { guessedWords } = props
  let contents: JSX.Element = <></>
  if (guessedWords.length === 0) {
    contents = (
      <span data-test='guess-instructions'>Guess the secret word!</span>
    )
  } else {
    const guessedWordsRow = guessedWords.map((word, index) => (
      <tr data-test='guessed-word' key={index}>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ))
    contents = (
      <div data-test='guessed-words'>
        <h3>GuessedWords</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{guessedWordsRow}</tbody>
        </table>
      </div>
    )
  }
  return <div data-test='component-guessed-words'>{contents}</div>
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
}

export default GuessedWords
