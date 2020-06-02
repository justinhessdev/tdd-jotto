import React from 'react'
import PropTypes from 'prop-types'
// import { guessWord } from './actions'

// interface IProps {
//   success: boolean
//   store?: object // for our tests,
//   guessWord: Function
// }

// interface IState {
//   currentGuess: string
// }

const Input = ({ secretWord }: { secretWord: string }) => {
  const [currentGuess, setCurrentGuess] = React.useState('')
  const contents = (
    <form className='form-inline'>
      <input
        data-test='input-box'
        type='text'
        placeholder='enter guess'
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
        Submit
      </button>
    </form>
  )

  return <div data-test='component-input'>{contents}</div>
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
}

export default Input
