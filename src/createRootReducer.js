// @flow

import {combineReducers} from 'redux'

import type {UserState, Action} from './types'

const userReducer = (state: UserState = {}, action: Action<*, *>) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {}
    case 'RECEIVE_USER':
      return action.payload
    default:
      return state
  }
}

const errorMessageReducer = (state: string = '', action: Action<*, *>) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return ''
    case 'LOGIN_FAILURE':
      return action.payload
    default:
      return state
  }
}

export default () =>
  combineReducers({
    errorMessage: errorMessageReducer,
    user: userReducer,
  })
