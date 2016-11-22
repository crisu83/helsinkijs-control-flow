// @flow

import {applyMiddleware, compose, createStore} from 'redux'
import createRootReducer from './createRootReducer'
// import createSagaMiddleware from 'redux-saga'
// import rootSaga from './rootSaga'

export default () => {
  const rootReducer = createRootReducer()
  //const sagaMiddleware = createSagaMiddleware()
  const middlewares = []

  // middlewares.push(sagaMiddleware);

  const enhancer = compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )

  const store = createStore(rootReducer, enhancer)

  // sagaMiddleware.run(rootSaga)

  if (module.hot) {
    // $FlowFixMe
    module.hot.accept('./createRootReducer', () => {
      const nextRootReducer = require('./createRootReducer').default()
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
