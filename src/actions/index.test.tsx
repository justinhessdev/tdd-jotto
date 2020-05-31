import moxios from 'moxios'
import { storeFactory } from '../../test/testUtils'
import { getSecretWord } from './'

describe('get secretWord action creator', () => {
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })
  test('adds response word to state', () => {
    const secretWord = 'party'
    const store = storeFactory()

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: secretWord
      })
    })

    // returning this promise which will wait for this to resolve before completing tests
    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState()
      expect(newState.secretWord).toBe(secretWord)
    })
  })
})
