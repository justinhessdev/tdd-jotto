import React, { Component } from 'react'
import { GlobalStyle, AppWrapper, JottoWrapper } from './App.styled'
import Congrats from './Congrats'
import GuessedWords from './GuessedWords'

class App extends Component {
  render() {
    return (
      <AppWrapper className='App'>
        <GlobalStyle />
        <JottoWrapper>
          <h1>Jotto</h1>
          <Congrats success={true} />
          <GuessedWords
            guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
          />
        </JottoWrapper>
      </AppWrapper>
    )
  }
}

export default App
