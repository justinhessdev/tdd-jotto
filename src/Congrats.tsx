import React from 'react'

interface IProps {
  success: boolean
}
/**
 * Functional Component for congratulatory message
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - rendered component or null if 'success' props is false
 */
export default (props: IProps): JSX.Element => {
  if (props.success) {
    return (
      <div data-test='component-congrats'>
        <span data-test='congrats-message'>Congrats! You guessed the word</span>
      </div>
    )
  }
  return <div data-test='component-congrats'></div>
}
