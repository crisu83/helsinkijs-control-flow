// @flow

export type User = {
  name?: string,
}

export type AppState = {
  errorMessage: string,
  user: User,
}

export type UserState = User

export type Action<Type: string, Payload: mixed> = {
  type: Type,
  payload?: Payload,
}

export type LoginRequestAction = Action<'LOGIN_REQUEST', {username: string, password: string}>
export type LoginSuccessAction = Action<'LOGIN_SUCCESS', void>
export type LoginFailureAction = Action<'LOGIN_FAILURE', string>
export type ReceiveUserAction = Action<'RECEIVE_USER', User>

export type ValidActions = LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | ReceiveUserAction
