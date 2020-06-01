import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { storeFactory, findByTestAttr } from '../test/testUtils'
import App from './App'

const setup = (state: object = {}): ShallowWrapper => {
  const store = storeFactory(state)
  const wrapper = shallow(<App />)
  return wrapper
}

test('app renders without error', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-app')
  expect(component.length).toBe(1)
})
