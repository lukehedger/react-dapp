import { Coin } from '../../contracts'
import { actions } from '../../coin'

const createBalanceRequest = address => new Promise( (resolve, reject) => {

  return Coin.balances.call(address, (error, result) => {

    if (error) return reject(error)

    const balance = result.toNumber()

    return resolve({ [address]: { balance } })

  })

} )

export const balances = address => {

  if ( Array.isArray(address) ) return Promise.all( address.map( a => createBalanceRequest(a) ) )
    .then( res => res.reduce( (reduced, a) => ({ ...reduced, ...a }), {} ) )

  return createBalanceRequest(address)

}

export const mint = (amount, from, to) => new Promise( (resolve, reject) => {

  return Coin.mint.sendTransaction(to, amount, { from }, (error, result) => {

    if (error) return reject(error)

    return resolve({ minter: from })

  })

} )

export const send = (amount, from, to) => new Promise( (resolve, reject) => {

  return Coin.send.sendTransaction(to, amount, { from }, (error, result) => {

    if (error) return reject(error)

    return resolve(result)

  })

} )

export const sendWatch = dispatch => Coin.Sent().watch((error, { args: { from, to } }) => {

  // TODO - this gets called upon listening before Sent() is actually called - why!?

  dispatch( actions.updateBalance([ from, to ]) )

})
