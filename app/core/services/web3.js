import Web3 from 'web3'

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

export const getAccounts = () => new Promise( (resolve, reject) => web3.eth.getAccounts( (error, result) => error ? reject(error) : resolve(result) ) )

export default web3
