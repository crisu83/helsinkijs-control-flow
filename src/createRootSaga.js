// @flow

import {takeLatest} from 'redux-saga'
import {fork, put} from 'redux-saga/effects'
import {loginSuccess, loginFailure, receiveUser} from './actions'
import {login, me} from './api'

function* loginRequestSaga({payload}: {payload: {username: string, password: string}}) {
  const response = yield login(payload.username, payload.password)

  if (response.status === 200) {
    yield put(loginSuccess())
  } else {
    const body = yield response.json()
    yield put(loginFailure(body))
  }
}

function* loginSuccessSaga() {
  const response = yield me()

  if (response.status === 200) {
    const body = yield response.json()
    yield put(receiveUser(body))
  }
}

function* loginSaga() {
  yield [
    fork(function* () {
      yield takeLatest('LOGIN_REQUEST', loginRequestSaga)
    }),
    fork(function* () {
      yield takeLatest('LOGIN_SUCCESS', loginSuccessSaga)
    }),
  ]
}

export default () =>
  // $FlowFixMe
  function* rootSaga() {
    yield [
      fork(loginSaga),
    ]
  }
