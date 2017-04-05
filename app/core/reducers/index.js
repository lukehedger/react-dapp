import { combineReducers } from 'redux-immutablejs'

import routerReducer from './router'
import * as Coin from '../../coin'

export default combineReducers({
  routing: routerReducer,
  [Coin.name]: Coin.reducer,
})
