// @flow

import type {User, LoginRequestAction, LoginSuccessAction, LoginFailureAction, ReceiveUserAction} from './types'

export const loginRequest = (username: string, password: string): LoginRequestAction => ({
  type: 'LOGIN_REQUEST',
  payload: {username, password},
})

export const loginSuccess = (): LoginSuccessAction => ({
  type: 'LOGIN_SUCCESS',
})

export const loginFailure = (error: string): LoginFailureAction => ({
  type: 'LOGIN_FAILURE',
  payload: error,
})

export const receiveUser = (user: User): ReceiveUserAction => ({
  type: 'RECEIVE_USER',
  payload: user,
})
