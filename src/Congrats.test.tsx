import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { findByTestAttr } from '../test/testUtils'
import Congrats from './Congrats'
import languageContext from './contexts/languageContext'
import successContext from './contexts/successContext'

/**
 * Factory function to create a ShallowWrapper for the congrats component
 * @function setup
 * @param {object} props
 * @returns {ShallowWrapper}
 */
const setup = ({ success = false, language = 'en' }): ReactWrapper => {
  return mount(
    <languageContext.Provider value={language}>
      <successContext.SuccessProvider value={[success, jest.fn()]}>
        <Congrats />
      </successContext.SuccessProvider>
    </languageContext.Provider>
  )
}

describe('language picker', () => {
  test('correctly renders congrats string in english', () => {
    const wrapper = setup({ success: true }) // default language is `en`
    expect(wrapper.text()).toBe('Congratulations! You guessed the word!')
  })

  test('correctly renders congrats string in emoji', () => {
    const wrapper = setup({ success: true, language: 'emoji' })
    expect(wrapper.text()).toBe('🎯🎉')
  })
})

test('render Congrats string in ', () => {
  const wrapper = setup({ success: false })
  const component = findByTestAttr(wrapper, 'component-congrats')
  expect(component.length).toBe(1)
})

test('renders no text when `success` is false', () => {
  const wrapper = setup({ success: false })
  const component = findByTestAttr(wrapper, 'component-congrats')
  expect(component.text()).toBe('')
})

test('renders non empty congrats message when `success` is true', () => {
  const wrapper = setup({ success: true })
  const message = findByTestAttr(wrapper, 'congrats-message')
  expect(message.text().length).not.toBe(0)
})
