// @flow

import flowRight from 'lodash/flowRight'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {loginRequest} from './actions'
import {getErrorMessage, getUsername} from './selectors'
import css from './Login.css'

type LoginProps = {
  errorMessage?: string,
  username?: string,
  router: any,
  loginRequest: typeof loginRequest,
}
type LoginState = {
  username: string,
  password: string,
}

class Login extends Component {
  props: LoginProps
  state: LoginState

  constructor(props: LoginProps, context: mixed) {
    super(props, context)

    this.state = {username: '', password: ''}
  }

  componentWillReceiveProps(nextProps: LoginProps) {
    if (nextProps.username !== this.props.username) {
      this.props.router.push('done')
    }
  }

  handleChange = (event: any, field: string) => {
    this.setState({[field]: event.target.value})
  }

  handleSubmit = (event: any) => {
    const {username, password} = this.state
    this.props.loginRequest(username, password)
    event.preventDefault()
  }

  render() {
    const {errorMessage} = this.props
    const {username, password} = this.state

    return (
      <div className={css.component}>
        <div className={css.errorMessage}>
          {errorMessage}
        </div>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <input
            className={css.input}
            type="text"
            placeholder="username"
            value={username}
            onChange={event => this.handleChange(event, 'username')}/>
          <input
            className={css.input}
            placeholder="password"
            type="password"
            value={password}
            onChange={event => this.handleChange(event, 'password')}/>
          <button className={css.button} type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default flowRight(
  withRouter,
  connect(
    state => ({
      errorMessage: getErrorMessage(state),
      username: getUsername(state),
    }),
    {loginRequest},
  ),
)(Login)
