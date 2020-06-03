import React from 'react'
const guessWordsContext = React.createContext()

function useGuessWords() {
  const context = React.useContext(guessWordsContext)

  if (!context) {
    throw new Error('useSuccess must be used within a SuccessProvider')
  }

  return context
}

/**
 * @function GuessWordsProvider
 * @param {object} props - props to pass through from declared component
 * @returns {JSX.Element} Provider coponent
 */
function GuessWordsProvider(props) {
  const [guessWords, setGuessWords] = React.useState(false)

  const value = React.useMemo(() => [guessWords, setGuessWords], [guessWords])

  return <guessWordsContext.Provider value={value} {...props} />
}

export default { GuessWordsProvider, useGuessWords }
