import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, checkProps } from '../test/testUtils'
import LanguagePicker from './languagePicker'

const mockSetLanguage = jest.fn()

const setup = () => shallow(<LanguagePicker setLanguage={mockSetLanguage} />)
test('renders without error', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-language-picker')
  expect(component.exists()).toBe(true)
})

test('does not throw warning with expected props', () => {
  checkProps(LanguagePicker, { setLanguage: jest.fn() })
})

test('does not throw warning with expected props', () => {})

test('calls setLangaguage prop upon click', () => {})
