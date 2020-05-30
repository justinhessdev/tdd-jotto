import { ShallowWrapper } from 'enzyme'
import { createStore } from 'redux'
import checkPropTypes from 'check-prop-types'
import rootReducer from '../src/reducers'

/**
 * Create a testing store with imoprted reducers, middleware, and intial state
 * globals: rootReducer
 * @param {object} initialState - initial state for store
 * @function storeFactory
 * @returns {Store} - redux store
 */
export const storeFactory = (initialState: any) => {
  return createStore(rootReducer, initialState)
}

/**
 * Returns node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme Shallow Wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (
  wrapper: ShallowWrapper,
  val: string
): ShallowWrapper => {
  return wrapper.find(`[data-test="${val}"]`)
}

export const checkProps = (component: any, conformingProps: any) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  )
  expect(propError).toBeUndefined()
}
