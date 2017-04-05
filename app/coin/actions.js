import * as actions from './actionTypes'
import * as Coin from '../core/services/coin'
import * as Web3 from '../core/services/web3'

export const loadAccounts = () => ({
  type: actions.LOAD_ACCOUNTS,
  promise: Web3.getAccounts(),
})

export const mintCoin = (amount, from, to) => ({
  type: actions.MINT_COIN,
  promise: Coin.mint(amount, from, to),
})

export const sendCoin = (amount, from, to) => ({
  type: actions.SEND_COIN,
  promise: Coin.send(amount, from, to),
})

export const updateBalance = address => ({
  type: actions.UPDATE_BALANCE,
  promise: Coin.balances(address),
})
