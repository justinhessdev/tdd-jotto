import React, { Component } from 'react'
import { connect } from 'react-redux'

interface IProps {
  success: boolean
  store?: object // for our tests
}

class Input extends Component<IProps> {
  render() {
    const contents = this.props.success ? null : (
      <form className='form-inline'>
        <input data-test='input-box' type='text' placeholder='enter guess' />
        <button data-test='submit-button' type='submit'>
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

export default connect(mapStateToProps)(Input)
