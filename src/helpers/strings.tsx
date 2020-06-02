import { string } from 'prop-types'

const languageStrings = {
  en: {
    congrats: 'Congratulations! You guessed the word!',
    submit: 'Submit',
    guessPrompt: 'Try to guess the secret word!',
    guessInputPlaceholder: 'enter guess',
    guessColumnHeader: 'Guessed Words',
    guessedWords: 'Guesses',
    matchingLettersColumnHeader: 'Matching Letters'
  },
  emoji: {
    congrats: '🎯🎉',
    submit: '🚀',
    guessPrompt: '🤔🤫🔤',
    guessInputPlaceholder: '⌨️🤔',
    guessedWords: '🤷‍🔤',
    guessColumnHeader: '🤷‍',
    matchingLettersColumnHeader: '✅'
  }
}

function getStringByLanguage(
  languageCode: string,
  stringKey: string,
  strings = languageStrings
) {
  if (!strings[languageCode] || !strings[languageCode][stringKey]) {
    console.warn(`could not get string [${stringKey}] for [${languageCode}]`)
    return strings.en[stringKey]
  }
  return strings[languageCode][stringKey]
}

// for future mocking

export default {
  getStringByLanguage
}
