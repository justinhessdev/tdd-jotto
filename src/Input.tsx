import React from 'react'
import PropTypes from 'prop-types'

import LanguageContext from './contexts/languageContexts'
import stringModule from './helpers/strings'

const Input = ({ secretWord }: { secretWord: string }) => {
  const language = React.useContext(LanguageContext)
  const [currentGuess, setCurrentGuess] = React.useState('')
  const contents = (
    <form className='form-inline'>
      <input
        data-test='input-box'
        type='text'
        placeholder={stringModule.getStringByLanguage(
          language,
          'guessInputPlaceholder'
        )}
        value={currentGuess}
        onChange={(evt) => setCurrentGuess(evt.target.value)}
      />
      <button
        data-test='submit-button'
        type='submit'
        onClick={(evt) => {
          evt.preventDefault()
          setCurrentGuess('')
        }}
      >
        {stringModule.getStringByLanguage(language, 'submit')}
      </button>
    </form>
  )

  return <div data-test='component-input'>{contents}</div>
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
}

export default Input
