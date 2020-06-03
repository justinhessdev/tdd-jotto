import React from 'react'
import { GlobalStyle, AppWrapper, JottoWrapper } from './App.styled'
import hookActions from './actions/hookActions'
import LanguageContext from './contexts/languageContexts'
import LanguagePicker from './languagePicker'
import Input from './Input'

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
      <LanguageContext.Provider value={state.language}>
        <LanguagePicker setLanguage={setLanguage}></LanguagePicker>
        <Input secretWord={state.secretWord} />
        <JottoWrapper></JottoWrapper>
      </LanguageContext.Provider>
    </AppWrapper>
  )
}

export default App
