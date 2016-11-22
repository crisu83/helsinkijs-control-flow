// @flow

import {browserHistory} from 'react-router'
import Root from './Root'
import routes from './routes'
import renderApp from './renderApp'

import type {RootProps} from './Root'

const rootProps: RootProps = {
  history: browserHistory,
  routes,
}

renderApp(Root, rootProps)

if (module.hot) {
  // $FlowFixMe
  module.hot.accept('./Root', () => {
    const nextRootComponent = require('./Root').default
    renderApp(nextRootComponent, rootProps)
  })
}
