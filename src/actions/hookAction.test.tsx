import moxios from 'moxios'

import { getSecretWord } from './hookActions'

describe('moxios tests', () => {
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })
  test('calls the getSecretWord callbackon axios response', async () => {
    // needs to be async function since we need to wait for moxios answer
    const secretWord = 'party'

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: secretWord
      })
    })

    // make sure mock was called with result from moxios
    // create mock for callback arg
    const mockSetSecretWord = jest.fn()
    await getSecretWord(mockSetSecretWord)

    // see whether mock was run with the current argument
    expect(mockSetSecretWord).toHaveBeenCalledWith(secretWord)
  })
})
