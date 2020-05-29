import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { findByTestAttr, checkProps } from '../test/testUtils'
import GuessedWords from './GuessedWords'

interface IProps {
  guessedWords: Array<{ guessedWord: string; letterMatchCount: number }>
}

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
}

/**
 * Factory function to create a ShallowWrapper for the GeussedWords component
 * @function setup
 * @param {object} props
 * @returns {ShallowWrapper}
 */
const setup = (props: IProps): ShallowWrapper => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<GuessedWords {...setupProps} />)
}

test('does not throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps)
})

describe('if there are no words guessed', () => {
  let wrapper: ShallowWrapper
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] })
  })
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words')
    expect(component.length).toBe(1)
  })

  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions')
    expect(instructions.text().length).not.toBe(0)
  })
})

describe('if there are words guessed', () => {
  let wrapper: ShallowWrapper
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 }
  ]
  beforeEach(() => {
    wrapper = setup({ guessedWords })
  })
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words')
    expect(component.length).toBe(1)
  })
  test('renders "guessed words" section', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words')
    expect(guessedWordsNode.length).toBe(1)
  })

  test('correct number of guessed words', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-word')
    expect(guessedWordsNode.length).toBe(guessedWords.length)
  })
})
