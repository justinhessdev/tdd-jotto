import React, { Component } from 'react'
import { connect } from 'react-redux'
import { guessWord } from './actions'

interface IProps {
  success: boolean
  store?: object // for our tests,
  guessWord: Function
}

interface IState {
  currentGuess: string
}

export class UnconnectedInput extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { currentGuess: '' }
    this.submitGuessedWord = this.submitGuessedWord.bind(this)
  }

  submitGuessedWord(evt) {
    evt.preventDefault()
    const guessedWord = this.state.currentGuess
    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord)
    }
  }
  render() {
    const contents = this.props.success ? null : (
      <form className='form-inline'>
        <input
          data-test='input-box'
          type='text'
          placeholder='enter guess'
          value={this.state.currentGuess}
          onChange={(evt) => this.setState({ currentGuess: evt.target.value })}
        />
        <button
          data-test='submit-button'
          type='submit'
          onClick={(evt) => this.submitGuessedWord(evt)}
        >
          Submit
        </button>
      </form>
    )
    return <div data-test='component-input'>{contents}</div>
  }
}
const mapStateToProps = ({ success }: { success: boolean }) => {
  return { success }
}

const mapDispatchToProps = (dispatch: any) => ({
  guessWord: dispatch(guessWord)
})

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedInput)
