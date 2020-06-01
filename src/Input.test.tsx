import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { findByTestAttr, storeFactory } from '../test/testUtils'
import Input from './Input'

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
