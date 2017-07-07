import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
//import createLogger from 'redux-logger'
//import createSagaMiddleware from 'redux-saga'
//import devTools from 'remote-redux-devtools'

//const logger = createLogger()
//const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState = {}) {
  // Create the store with two middlewares
  const middlewares = [
    //sagaMiddleware
  //, logger
  ]

  const enhancers = [
    applyMiddleware(...middlewares)
  //, devTools()
  ]

  const store = createStore(
    reducers
  , initialState
  , compose(...enhancers)
  )

  // Extensions
  //store.runSaga = sagaMiddleware.run
  //store.asyncReducers = {} // Async reducer registry

  return store
}

