// @flow

import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {Router} from 'react-router'
import configureStore from './configureStore'

export type RootProps = {
  history: mixed,
  routes: mixed
}

type RootState = {
  store?: mixed
}

export default class Root extends Component {
  props: RootProps
  state: RootState

  constructor(props: RootProps, context: mixed) {
    super(props, context)

    this.state = {store: null}
  }

  componentWillMount() {
    const store = configureStore()
    this.setState({store})
  }

  render() {
    const {history, routes} = this.props
    const {store} = this.state

    return (
      <Provider store={store}>
        <Router history={history} routes={routes} key={Math.random()}/>
      </Provider>
    )
  }
}
