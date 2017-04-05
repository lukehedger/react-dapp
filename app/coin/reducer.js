import Immutable, { Map } from 'immutable'
import { createReducer } from 'redux-immutablejs'
import { handle } from 'redux-pack'

import * as actions from './actionTypes'
import { Account } from './models'

const createAccountRecord = () => Account()

const createAccountsMap = accounts => accounts.reduce( (reduced, a) => ({ ...reduced, [a]: createAccountRecord(a) }), {} )

export const initialState = Immutable.fromJS({
  accounts: Map({}),
  defaultAccount: null,
})

export default createReducer(initialState, {

  // [actions.TEST]: (state, action) => state.merge(action.payload),

  [actions.LOAD_ACCOUNTS]: (state, action) => handle(state, action, {
    success: prevState => prevState.merge({ accounts: createAccountsMap(action.payload), defaultAccount: action.payload[0] }),
  }),

  [actions.UPDATE_BALANCE]: (state, action) => handle(state, action, {
    success: prevState => prevState.mergeIn([ 'accounts' ], action.payload),
  }),

})
