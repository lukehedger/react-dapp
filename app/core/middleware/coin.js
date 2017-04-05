/**
  * @desc Middleware to handle Coin contract events
*/

import * as Coin from '../services/coin'
import { actions, actionTypes as coin } from '../../coin'

const CoinMiddleware = ({ dispatch, getState }) => next => action => {

  // ------
  // LOAD ACCOUNTS
  // ------

  if ( action.type === coin.LOAD_ACCOUNTS && action.payload && !action.error ) {

    // start watching for coin transactions
    Coin.sendWatch(dispatch)

    // get each account's balance
    dispatch( actions.updateBalance(action.payload) )

  }

  // ------
  // MINT COIN
  // ------

  if ( action.type === coin.MINT_COIN && action.payload && !action.error ) {

    // refresh minter's balance
    dispatch( actions.updateBalance(action.payload.minter) )

  }

  return next(action)

}

export default CoinMiddleware
