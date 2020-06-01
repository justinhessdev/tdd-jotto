import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { findByTestAttr, storeFactory } from '../test/testUtils'
import Input, { UnconnectedInput } from './Input'
import { guessWord } from './actions'

/**
 * Factory function to craete a ShallowWrapper for the GuessWords component
 * @function setup
 * @param {object} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState: object = {}): ShallowWrapper => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive()
  return wrapper
}

describe('render', () => {
  describe('word has not been  guessed', () => {
    let wrapper: ShallowWrapper
    beforeEach(() => {
      const initialState = { success: false }
      wrapper = setup(initialState)
    })
    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input')
      expect(component.length).toBe(1)
    })

    test('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.length).toBe(1)
    })

    test('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.length).toBe(1)
    })
  })
  describe('word has  been  guessed', () => {
    let wrapper: ShallowWrapper
    beforeEach(() => {
      const initialState = { success: true }
      wrapper = setup(initialState)
    })
    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input')
      expect(component.length).toBe(1)
    })

    test('does not render input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.length).toBe(0)
    })

    test('does not render submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.length).toBe(0)
    })
  })
})

describe('redux props', () => {
  test('has success piece of state as prop', () => {
    const success = true
    const wrapper: any = setup({ success })
    const instance = wrapper.instance()
    const instanceProps = instance.props
    const successProp = instanceProps.success
    expect(successProp).toBe(success)
  })

  test('guessWord action creator is a function prop', () => {
    const wrapper: any = setup()
    const guessWordProp = wrapper.instance().props.guessWord
    expect(guessWordProp).toBeInstanceOf(Function)
  })
})

/**
 * HMMMM what is going on
 * interface IShallowWrapper {
  instance: () => {
    props: { success: boolean }
  }
}

describe('redux props', () => {
  test('has success piece of state as prop', () => {
    const success = true
    const wrapper: ShallowWrapper<{},{}, IShallowWrapper> = setup({ success })
    const instance = wrapper.instance()
    const instanceProps = instance.props
    const successProp = instanceProps.success
    expect(successProp).toBe(success)
  })
})
 */

describe('guessWord action creator call', () => {
  let wrapper: any
  let guessWordMock: any
  const guessedWord = 'train'
  beforeEach(() => {
    guessWordMock = jest.fn()

    wrapper = shallow(
      <UnconnectedInput guessWord={guessWordMock} success={false} />
    )

    wrapper.setState({ currentGuess: guessedWord })

    const submitButton = findByTestAttr(wrapper, 'submit-button')
    submitButton.simulate('click', { preventDefault() {} })
  })
  test('guessWord works on submit click', () => {
    // check to see if mock ran
    const getGuessWordCallCount = guessWordMock.mock.calls.length
    expect(getGuessWordCallCount).toBe(1)
  })

  test('guessWord works on submit with input value as argument', () => {
    // check to see if mock ran
    const guessWordArg = guessWordMock.mock.calls[0][0] // first elemnt of what our mock calls
    expect(guessWordArg).toBe(guessedWord)
  })
})
