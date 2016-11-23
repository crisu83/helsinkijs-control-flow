// @flow

import {browserHistory} from 'react-router'
import Root from './Root'
import renderApp from './renderApp'
import './index.css'

import type {RootProps} from './Root'

const rootProps: RootProps = {
  history: browserHistory,
}

renderApp(Root, rootProps)

if (module.hot) {
  // $FlowFixMe
  module.hot.accept('./Root', () => {
    const nextRootComponent = require('./Root').default
    renderApp(nextRootComponent, rootProps)
  })
}
