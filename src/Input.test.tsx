import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { findByMountStyledTestAttr, checkProps } from '../test/testUtils'
import Input from './Input'
import LanguageContext from './contexts/languageContexts'
// import { guessWord } from './actions'

/**
 * Factory function to create a ShallowWrapper for the Input component
 * @function setup
 * @param {object} initialState - Initial state for this setup
 * @returns {ReactWrapper}
 */
const setup = ({ secretWord = 'party', language = 'en' }): ReactWrapper => {
  return mount(
    <LanguageContext.Provider value={language}>
      <Input secretWord={secretWord} />
    </LanguageContext.Provider>
  )
}

describe('language picker', () => {
  test('correctly renders congrats string in english', () => {
    const wrapper = setup({}) // default language is `en`
    const submitButton = findByMountStyledTestAttr(wrapper, 'submit-button')
    expect(submitButton.text()).toBe('Submit')
  })

  test('correctly renders congrats string in emoji', () => {
    const wrapper = setup({ language: 'emoji' })
    const submitButton = findByMountStyledTestAttr(wrapper, 'submit-button')
    expect(submitButton.text()).toBe('🚀')
  })
})

describe('render', () => {
  describe('word has not been  guessed', () => {
    let wrapper: ReactWrapper
    beforeEach(() => {
      wrapper = setup({})
    })
    test('renders component without error', () => {
      const component = findByMountStyledTestAttr(wrapper, 'component-input')
      expect(component.length).toBe(1)
    })

    test('does not throw warning with expected input props', () => {
      checkProps(Input, { secretWord: 'party' })
    })
  })
})

describe('state constrolled input field', () => {
  let mockSetCurrentGuess = jest.fn()
  let wrapper: ReactWrapper

  beforeEach(() => {
    mockSetCurrentGuess.mockClear()
    React.useState = jest.fn(() => ['', mockSetCurrentGuess])
    wrapper = setup({})
  })
  test('state updates with value of input box upon change', () => {
    const inputBox = findByMountStyledTestAttr(wrapper, 'input-box')

    const mockEvent = { target: { value: 'train' } }
    inputBox.simulate('change', mockEvent)

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
  })

  test('field is cleared upon submit button click', () => {
    const submitButton = findByMountStyledTestAttr(wrapper, 'submit-button')

    submitButton.simulate('click', { preventDefault() {} })
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('')
  })
})
