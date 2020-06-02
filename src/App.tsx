import React from 'react'
// import Congrats from './Congrats'
// import GuessedWords from './GuessedWords'
// import Input from './Input'
import { GlobalStyle, AppWrapper, JottoWrapper } from './App.styled'

// interface IApp {
//   store?: object // for testing
//   success: boolean
//   guessedWords: Array<{ guessedWord: string; letterMatchCount: number }>
//   getSecretWord: Function
//   secretWord: string
// }
function App() {
  return (
    <AppWrapper className='App' data-test='component-app'>
      <GlobalStyle />
      <JottoWrapper></JottoWrapper>
    </AppWrapper>
  )
}

export default App
