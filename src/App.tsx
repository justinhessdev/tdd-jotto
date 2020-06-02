import React from 'react'
import { GlobalStyle, AppWrapper, JottoWrapper } from './App.styled'
import hookActions from './actions/hookActions'

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
    default:
      throw new Error(`Invalid action type ${action.type}`)
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, { secretWord: '' })
  const setSecretWord = (secretWord: string) =>
    dispatch({ type: 'setSecretWord', payload: secretWord })
  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord)
  }, [])
  return (
    <AppWrapper className='App' data-test='component-styled-app'>
      <GlobalStyle />
      <JottoWrapper></JottoWrapper>
    </AppWrapper>
  )
}

export default App
