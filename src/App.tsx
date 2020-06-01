import React, { Component } from 'react'
import { connect } from 'react-redux'
import Congrats from './Congrats'
import GuessedWords from './GuessedWords'
import Input from './Input'
import { getSecretWord } from './actions'
import { GlobalStyle, AppWrapper, JottoWrapper } from './App.styled'

interface IApp {
  store?: object // for testing
  success: boolean
  guessedWords: Array<{ guessedWord: string; letterMatchCount: number }>
  getSecretWord: Function
}
export class UnconnectedApp extends Component<IApp> {
  componentDidMount() {
    // get the secret Word
    this.props.getSecretWord()
  }
  render() {
    const { success, guessedWords } = this.props
    return (
      <AppWrapper className='App'>
        <GlobalStyle />
        <JottoWrapper>
          <h1>Jotto</h1>
          <Congrats success={success} />
          <Input />
          <GuessedWords guessedWords={guessedWords} />
        </JottoWrapper>
      </AppWrapper>
    )
  }
}

const mapStateToProps = (state: any) => {
  const { success, guessedWords, secretWord } = state
  return { success, guessedWords, secretWord }
}

const mapDispatchToProps = (dispatch: any) => ({
  getSecretWord: dispatch(getSecretWord)
})

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedApp)
