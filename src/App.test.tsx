import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { findByMountStyledTestAttr } from '../test/testUtils'
import App from './App'

import hookActions from './actions/hookActions'

const mockGetSecretWord = jest.fn()
const setup = (state: object = {}): ReactWrapper => {
  mockGetSecretWord.mockClear()
  hookActions.getSecretWord = mockGetSecretWord

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
})
