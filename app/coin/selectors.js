import { createSelector } from 'reselect'
import { name } from './constants'

// ------
// STATIC
// ------
const getAll = state => state.get(name)
const getAccounts = createSelector( getAll, state => state.get('accounts').toJS() )
const getDefaultAccount = createSelector( getAll, state => state.get('defaultAccount') )

// ------
// COMPUTED
// ------

const getDefaultAccountBalance = createSelector( [ getAccounts, getDefaultAccount ], (accounts, defaultAccount) => accounts[defaultAccount] && accounts[defaultAccount].balance )

// ------
// EXPORTS
// ------

export default {
  accounts: getAccounts,
  defaultAccount: getDefaultAccount,
  defaultAccountBalance: getDefaultAccountBalance,
}
