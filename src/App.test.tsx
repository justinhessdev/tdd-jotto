import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { findByMountStyledTestAttr } from '../test/testUtils'
import App from './App'

import hookActions from './actions/hookActions'

const mockGetSecretWord = jest.fn()
const setup = (secretWord = 'party'): ReactWrapper => {
  mockGetSecretWord.mockClear()
  hookActions.getSecretWord = mockGetSecretWord

  const mockUseReducer = jest
    .fn()
    .mockReturnValue([{ secretWord, language: 'en' }, jest.fn()])

  React.useReducer = mockUseReducer
  //use mount bcause useEffect not called on shallow
  // github/com/airbnb/ezyme/issue/2806
  return mount(<App />)
}

test('app renders without error', () => {
  const wrapper = setup()
  const component = findByMountStyledTestAttr(wrapper, 'component-styled-app')
  expect(component.length).toBe(1) //
})

describe('getSecretWord calls', () => {
  test('getSecretWord gets called on App mount', () => {
    setup()

    // check to see if secret word was updated
    expect(mockGetSecretWord).toHaveBeenCalled()
  })

  test('secretWord does not update on App update', () => {
    const wrapper: any = setup()
    mockGetSecretWord.mockClear() // clear mock again since it runs once on mount -- so we are testing it does not get rendered again...
    wrapper.setProps()
    expect(mockGetSecretWord).not.toHaveBeenCalled()
  })
})

describe('secretWord is not null', () => {
  let wrapper: any
  beforeEach(() => {
    wrapper = setup('party')
  })
  test('renders app when secretWord is not null', () => {
    const component = findByMountStyledTestAttr(wrapper, 'component-styled-app')
    expect(component.exists()).toBe(true)
  })

  test('does not render spinner when secretWord is not null', () => {
    const spinnerComponent = findByMountStyledTestAttr(wrapper, 'spinner')
    expect(spinnerComponent.exists()).toBe(false)
  })
})

describe('secretWord is null', () => {
  let wrapper: any
  beforeEach(() => {
    wrapper = setup('')
  })
  test('does not render app when secretWord is null', () => {
    const component = findByMountStyledTestAttr(wrapper, 'component-styled-app')
    expect(component.exists()).toBe(false)
  })

  test('renders spinner when secretWord is null', () => {
    const spinnerComponent = findByMountStyledTestAttr(wrapper, 'spinner')
    expect(spinnerComponent.exists()).toBe(true)
  })
})
