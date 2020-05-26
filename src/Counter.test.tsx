import React from 'react'
import { render, screen } from '@testing-library/react'
import Counter from './Counter'
/**
 * We are testing behavior over implementation
 */

test('renders without error', () => {
  render(<Counter />)
  screen.getByTestId('component-counter') // errors out if there is no test id match
})

test('renders increment button', () => {})

test('renders counter display', () => {})

test('renders counter starts at 0', () => {})

test('renders clicking button increments counter display', () => {})

test('renders diff snapshot clicking button increments counter', () => {
  //   const { getByText, asFragment } = render(<Counter />)
  //   const firstRender = asFragment()
  //   fireEvent.click(getByText(/Increment/))
  //   expect(firstRender).toMatchDiffSnapshot(asFragment())
})
