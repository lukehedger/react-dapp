# ÐApp

## Running

### Setup
```
yarn
```

### Local Ethereum client
```
yarn testrpc
```

### Compile/Deploy Contracts
```
yarn contracts
```

### Develop
```
yarn start
```

## What's a ÐApp then?

ÐApp => **D**ecentralized **App**

> A ÐApp has its backend code (Ethereum contracts) running on a decentralized peer-to-peer network (Ethereum). Contrast this with an app where the backend code is running on centralized servers.
>
> A ÐApp can have frontend code and user interfaces written in any language (just like an app) that can make calls to its backend.
>
> `App = frontend + server`
>
> `ÐApp = frontend + contracts`
>
> https://ethereum.stackexchange.com/questions/383/what-is-a-dapp/384#384

ÐApps are cool:

> A decentralized architecture also encourages innovation: since the interface is detached from the data, anyone can come up with a new interface to the same app, creating a more vibrant and competing ecosystem.
>
> https://blog.ethereum.org/2016/07/12/build-server-less-applications-mist/

## How do ÐApps compare to Apps?

TODO

### Web3

To run a Ðapp you'll need access to the `web3` JavaScript API, which implements the [Generic JSON RPC spec](https://github.com/ethereum/wiki/wiki/JSON-RPC):

- To run in a web browser install the [MetaMask plugin](https://metamask.io) for Chrome
- Or include the [`web3` package](https://github.com/ethereum/web3.js/): `npm i web3`
- Or use the [Mist browser](https://github.com/ethereum/mist)

### Contracts

TODO - description, comparison with API

## Testing

TODO - how to test contracts
