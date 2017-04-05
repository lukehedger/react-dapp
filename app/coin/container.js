import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as actions from './actions'
import selectors from './selectors'
import { Button } from '../core/primitives/button'
import { Text } from '../core/primitives/text'
import { Section } from '../core/primitives/section'
import { View } from '../core/primitives/view'

export class Coin extends Component {

  constructor() {

    super()

    this.onMintCoinClick = this.onMintCoinClick.bind(this)
    this.onSendCoinClick = this.onSendCoinClick.bind(this)

  }

  componentDidMount() {

    const { actions } = this.props

    actions.loadAccounts()

  }

  onMintCoinClick(amount) {

    const { actions, defaultAccount } = this.props

    actions.mintCoin(amount, defaultAccount, defaultAccount)

  }

  onSendCoinClick(amount, to) {

    const { actions, defaultAccount: from } = this.props

    actions.sendCoin(amount, from, to)

  }

  render() {

    const { accounts, defaultAccount, defaultAccountBalance } = this.props

    const { onMintCoinClick, onSendCoinClick } = this

    // TODO:
    // the process for checking balances could be improved:
    // - by adding a loading state (only until optimistic update is done)
    // - by adding some optimistic UI enhancements (what about rollbacks - redux-pack:failure)
    // - by adding a ServiceWorker layer to handle balance checks off main thread

    return (
      <View>

        <Text sip={{ fs:6, fw:'b' }} color='jaak'>Coinage</Text>

        <Text sip={{ fw:'b' }}>Your Balance: { defaultAccountBalance }</Text>

        <Button onClick={ () => onMintCoinClick(10) }>Mint 🤑</Button>

        { Object.keys(accounts).map( account => account !== defaultAccount && (
          <Section key={ account }>

            <Text>{ account } 💰 { accounts[account].balance }</Text>

            <Button onClick={ () => onSendCoinClick(1, account) }>Send 💸</Button>

          </Section>
        )) }

      </View>
    )

  }

}

export default connect(
  createStructuredSelector({ ...selectors }),
  dispatch => ({
    actions: bindActionCreators({ ...actions }, dispatch)
  })
)(Coin)
