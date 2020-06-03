import React from 'react'
import { CongratsWrapper } from './Congrats.styled'
import languageContext from './contexts/languageContext'
import successContext from './contexts/successContext'
import stringModule from './helpers/strings'

/**
 * Functional Component for congratulatory message
 * @function
 * @returns {JSX.Element} - rendered component or null if 'success' is false
 */
const Congrats = (): JSX.Element => {
  const [success] = successContext.useSuccess()
  const language = React.useContext(languageContext)
  if (success) {
    return (
      <CongratsWrapper data-test='component-congrats'>
        <span data-test='congrats-message'>
          {stringModule.getStringByLanguage(language, 'congrats')}
        </span>
      </CongratsWrapper>
    )
  }
  return <div data-test='component-congrats'></div>
}

export default Congrats
