// @flow

import {combineReducers} from 'redux'

export default () =>
  combineReducers({
    hello: (state = 'Hello from React!') => state,
  })
