import React from 'react'
import {Route, IndexRoute} from 'react-router'

import Login from './Login'
import Done from './Done'

export default (
  <Route path="/">
    <IndexRoute component={Login}/>
    <Route path="done" component={Done}/>
  </Route>
)
