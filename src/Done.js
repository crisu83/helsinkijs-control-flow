// @flow

import flowRight from 'lodash/flowRight'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {getUsername} from './selectors'
import css from './Done.css'

type DoneProps = {
  username: string,
  router: any,
}

type DoneState = mixed

class Done extends Component {
  props: DoneProps
  state: DoneState

  componentWillMount() {
    this.checkAuthenticated(this.props)
  }

  checkAuthenticated = (props) => {
    if (!props.username) {
      this.props.router.push('/')
    }
  }

  render() {
    const {username} = this.props

    return (
      <div className={css.component}>
        <h1>Hello {username}!</h1>
      </div>
    )
  }
}

export default flowRight(
  withRouter,
  connect(
    (state) => ({
      username: getUsername(state),
    })
  ),
)(Done)
