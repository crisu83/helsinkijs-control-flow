// @flow

import get from 'lodash/get'
import type {AppState} from './types'

export const getUsername = (state: AppState): string =>
  get(state, 'user.name', '')

export const getErrorMessage = (state: AppState): string =>
  get(state, 'errorMessage', '')
