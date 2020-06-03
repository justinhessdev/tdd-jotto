import React from 'react'
import { mount } from 'enzyme' // wrapping components in providers
import { findByMountStyledTestAttr } from '../test/testUtils'

import successContest from './contexts/successContext'
import Input from './Input'

function setup(secretWord = 'party') {
  const wrapper = mount(
    <successContest.SuccessProvider>
      <Input secretWord={secretWord} />
    </successContest.SuccessProvider>
  )
  const inputBox = findByMountStyledTestAttr(wrapper, 'input-box')
  const submitButton = findByMountStyledTestAttr(wrapper, 'submit-button')
  return [wrapper, inputBox, submitButton]
}

describe('test word guesses', () => {
  let wrapper
  let inputBox
  let submitButton

  beforeEach(() => {
    ;[wrapper, inputBox, submitButton] = setup('party')
  })

  describe('correct guess', () => {
    beforeEach(() => {
      const mockEvent = { target: { value: 'party' } }
      inputBox.simulate('change', mockEvent)
      submitButton.simulate('click')
    })

    test('Input component contains no children', () => {
      const inputComponent = findByMountStyledTestAttr(
        wrapper,
        'component-input'
      )
      expect(inputComponent.children().length).toBe(0)
    })
  })
  describe('incorrect guess', () => {
    beforeEach(() => {
      const mockEvent = { target: { value: 'train' } }
      inputBox.simulate('change', mockEvent)
      submitButton.simulate('click')
    })

    test('Input box remains', () => {
      expect(inputBox.exists()).toBe(true)
    })
  })
})
