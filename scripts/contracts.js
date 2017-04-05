const fs = require('fs')
const path = require('path')
const solc = require('solc')
const Web3 = require('web3')

const GAS_LIMIT = 4700000

// init web3
const web3 = new Web3()

// set web3 provider
web3.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"))

return web3.eth.getAccounts( (e, accounts) => {

  const filename = path.join(__dirname, '../contracts/coin.sol')

  const input = fs.readFileSync(filename, 'utf8')

  // 🥞 compile!
  const output = solc.compile({ sources: { [`${filename}`]: input } }, 1)

  const fromAccount = accounts[0]

  for (var contractName in output.contracts) {

    // get `bytecode` and `ABI` from the compiled contract
    let bytecode = output.contracts[contractName].bytecode
    let abi = JSON.parse(output.contracts[contractName].interface)

    // 🚀 deploy!
    web3.eth.contract(abi).new({ data: bytecode, from: fromAccount, gas: GAS_LIMIT, value: 0 }, (err, contract) => {

      if (err) return console.error(err)

      else if (contract.address) {

        const contracts = `import web3 from './core/services/web3'\n\nexport const Coin = web3.eth.contract(${JSON.stringify(abi)}).at('${contract.address}')`

        return fs.writeFileSync(path.join(__dirname, '../app/contracts.js'), contracts)

      }

    })

  }

} )
