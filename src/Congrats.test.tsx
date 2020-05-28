import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import Congrats from './Congrats'
import { findByTestAttr } from '../test/testUtils'

interface IProps {
  success: boolean
}
/**
 * Factory function to create a ShallowWrapper for the congrats component
 * @function setup
 * @param {object} props
 * @returns {ShallowWrapper}
 */
const setup = (props: IProps = { success: false }): ShallowWrapper => {
  return shallow(<Congrats success={props.success} />)
}

test('render Congrats without Error', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-congrats')
  expect(component.length).toBe(1)
})

test('renders no text when `success` prop is false', () => {
  const wrapper = setup({ success: false })
  const component = findByTestAttr(wrapper, 'component-congrats')
  expect(component.text()).toBe('')
})

test('redners non empty congrats message when `success` prop is true', () => {
  const wrapper = setup({ success: true })
  const message = findByTestAttr(wrapper, 'congrats-message')
  expect(message.text().length).not.toBe(0)
})
