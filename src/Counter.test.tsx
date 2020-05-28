import React from 'react'
import { shallow } from 'enzyme'
import Counter from './Counter'

/**
 * We are testing behavior over implementation
 */

/**
 * Factoery function to create render for Coutner component
 * @function setup
 * @param {object} props - component props sepecific to this setup
 * @param {object} state - Initial state for setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = {}) => {
  const wrapper = shallow(<Counter {...props} />)
  if (state && typeof state === 'object' && Object.keys(state).length) {
    wrapper.setState(state)
  }
  return wrapper
}

const findByTestAttr = (wrapper: any, val: any) => {
  return wrapper.find(`[data-test="${val}"]`)
}

test('renders without error', () => {
  const wrapper = setup()
  const counterComponent = findByTestAttr(wrapper, 'component-counter')
  expect(counterComponent.length).toBe(1)
})

test('renders increment button', () => {
  const wrapper = setup()
  const incrementButton = findByTestAttr(wrapper, 'increment-button')
  expect(incrementButton.length).toBe(1)
})

test('renders counter display', () => {
  const wrapper = setup()
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1)
})

test('renders counter starts at 0', () => {
  const wrapper = setup()
  const initialCounterState = wrapper.state('counter')
  expect(initialCounterState).toBe(0)
})

test('renders clicking button increments counter display', () => {
  const counter = 7
  const wrapper = setup({}, { counter })

  // find button and click
  const button = findByTestAttr(wrapper, 'increment-button')
  button.simulate('click')

  // find display and test value
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.text()).toContain(counter + 1)
})

test('renders decrement button', () => {
  const wrapper = setup()
  const decrementButton = findByTestAttr(wrapper, 'decrement-button')
  expect(decrementButton.length).toBe(1)
})

test('renders clicking button decrements counter display', () => {
  const counter = 5
  const wrapper = setup({}, { counter })

  // find decrement button
  const button = findByTestAttr(wrapper, 'decrement-button')
  button.simulate('click')

  // find counter display
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.text()).toContain(counter - 1)
})
