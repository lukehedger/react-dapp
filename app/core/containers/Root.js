import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import { configureStore } from '../store'
import { Container as Coin } from '../../coin'

const history = createHistory()
const store = configureStore()

export default class Root extends Component {

  componentWillMount() {

    console.log('⛓ Ð A P P ⛓')

  }

  render() {

    return (
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <Route exact path='/' component={ Coin }/>
        </ConnectedRouter>
      </Provider>
    )

  }

}
