import React from 'react'
import hookActions from './actions/hookActions'
import languageContext from './contexts/languageContext'
import successContext from './contexts/successContext'
import guessedWordsContext from './contexts/guessedWordsContext'
import LanguagePicker from './languagePicker'
import Congrats from './Congrats'
import Guessedwords from './GuessedWords'
import Input from './Input'
import { GlobalStyle, AppWrapper, JottoWrapper } from './App.styled'

// interface IApp {
//   store?: object // for testing
//   success: boolean
//   guessedWords: Array<{ guessedWord: string; letterMatchCount: number }>
//   getSecretWord: Function
//   secretWord: string
// }

/**
 * reducer to update state, called automatica;y by dispatch
 * @param {object} state - existing state
 * @param {object} action  - contains type and payload properties for the state update
 * @returns {object} - new state
 */
function reducer(state, action) {
  switch (action.type) {
    case 'setSecretWord':
      return { ...state, secretWord: action.payload }
    case 'setLanguage':
      return { ...state, language: action.payload }
    default:
      throw new Error(`Invalid action type ${action.type}`)
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    secretWord: '',
    language: 'en'
  })

  const setSecretWord = (secretWord: string) =>
    dispatch({ type: 'setSecretWord', payload: secretWord })

  const setLanguage = (language: string) =>
    dispatch({ type: 'setLanguage', payload: language })

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord)
  }, [])

  /**
   * Add spinner UI...
   */
  if (!state.secretWord) {
    return (
      <div className='spinner' data-test='spinner'>
        <div className='spinner-border' role='status'>
          <span className='sr-only'>Loading...</span>
          <p>Loading secret Word</p>
        </div>
      </div>
    )
  }

  return (
    <AppWrapper className='App' data-test='component-styled-app'>
      <GlobalStyle />
      <h1>Jotto</h1>
      <languageContext.Provider value={state.language}>
        <LanguagePicker setLanguage={setLanguage}></LanguagePicker>
        <guessedWordsContext.GuessedWordsProvider>
          <successContext.SuccessProvider>
            <Congrats />
            <Input secretWord={state.secretWord} />
          </successContext.SuccessProvider>
          <Guessedwords />
        </guessedWordsContext.GuessedWordsProvider>
        <JottoWrapper></JottoWrapper>
      </languageContext.Provider>
    </AppWrapper>
  )
}

export default App
