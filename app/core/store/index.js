import Immutable from 'immutable'
import { createStore, applyMiddleware, compose } from 'redux'

import createMiddleware from '../middleware'
import rootReducer from '../reducers'
import { isDevelopment } from '../util'

// create middleware
const middleware = createMiddleware(isDevelopment)

// create store with middleware - and devTools if dev
const finalCreateStore = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension && isDevelopment ? window.devToolsExtension() : f => f
)(createStore)

// expose create store method
export const configureStore = (initialState = {}) => finalCreateStore(rootReducer, Immutable.fromJS(initialState))
