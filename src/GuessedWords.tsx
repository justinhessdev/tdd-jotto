import React from 'react'
import PropTypes from 'prop-types'
import languageContext from './contexts/languageContext'
import stringModule from './helpers/strings'

import { GuessedWordsTable } from './GuessedWords.styled'

interface IProps {
  guessedWords: Array<{ guessedWord: string; letterMatchCount: number }>
}

const GuessedWords = (props: IProps) => {
  const language = React.useContext(languageContext)
  const { guessedWords } = props
  let contents: JSX.Element = <></>
  if (guessedWords.length === 0) {
    contents = (
      <span data-test='guess-instructions'>
        {stringModule.getStringByLanguage(language, 'guessPrompt')}
      </span>
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
        <h2>{stringModule.getStringByLanguage(language, 'guessedWords')}</h2>
        <GuessedWordsTable>
          <thead>
            <tr>
              <th>
                {stringModule.getStringByLanguage(
                  language,
                  'guessColumnHeader'
                )}
              </th>
              <th>
                {stringModule.getStringByLanguage(
                  language,
                  'matchingLettersColumnHeader'
                )}
              </th>
            </tr>
          </thead>
          <tbody>{guessedWordsRow}</tbody>
        </GuessedWordsTable>
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
