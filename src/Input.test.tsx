import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { findByTestAttr, checkProps } from '../test/testUtils'
import Input from './Input'
// import { guessWord } from './actions'

/**
 * Factory function to craete a ShallowWrapper for the GuessWords component
 * @function setup
 * @param {object} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (secretWord = ''): ShallowWrapper => {
  return shallow(<Input secretWord={secretWord} />)
}

describe('render', () => {
  describe('word has not been  guessed', () => {
    let wrapper: ShallowWrapper
    beforeEach(() => {
      wrapper = setup()
    })
    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input')
      expect(component.length).toBe(1)
    })

    test('does not throw warning with expected input props', () => {
      checkProps(Input, { secretWord: 'party' })
    })
  })
})

describe('state constrolled input field', () => {
  let mockSetCurrentGuess = jest.fn()
  let wrapper: ShallowWrapper

  beforeEach(() => {
    mockSetCurrentGuess.mockClear()
    React.useState = jest.fn(() => ['', mockSetCurrentGuess])
    wrapper = setup()
  })
  test('state updates with value of input box upon change', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box')

    const mockEvent = { target: { value: 'train' } }
    inputBox.simulate('change', mockEvent)

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
  })

  test('field is cleared upon submit button click', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button')

    submitButton.simulate('click', { preventDefault() {} })
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('')
  })
})
