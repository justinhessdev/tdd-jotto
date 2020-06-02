import { ShallowWrapper, ReactWrapper } from 'enzyme'
import { createStore, applyMiddleware } from 'redux'
import checkPropTypes from 'check-prop-types'
import rootReducer from '../src/reducers'
import { middlewares } from '../src/configureStore'

/**
 * Create a testing store with imoprted reducers, middleware, and intial state
 * globals: rootReducer, middleawres
 * @param {object} initialState - initial state for store
 * @function storeFactory
 * @returns {Store} - redux store
 */
export const storeFactory = (initialState: any) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(rootReducer, initialState)
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

/**
 * Returns first node with the given data-test attribute of styled component element (since styled components returns children element with same classnames)
 * @param {ReactWrapper} wrapper - Enzyme React Wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ReactWrapper}
 */
export const findByMountStyledTestAttr = (
  wrapper: ReactWrapper,
  val: string
): ReactWrapper => {
  return wrapper.find(`[data-test="${val}"]`).first()
}

export const checkProps = (component: any, conformingProps: object) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  )
  expect(propError).toBeUndefined()
}
