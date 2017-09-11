import React from 'react'

import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import { createLogger } from 'redux-logger'
import createStorybookListener from 'storybook-addon-redux-listener';

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = []
if (process.env.NODE_ENV !== 'test') {
  middlewares.push(
    createStorybookListener(),
    createLogger({ collapsed: true }),
  )
}

const enhancers = [
  applyMiddleware(...middlewares),
]
const reducer = combineReducers({
  form: reduxFormReducer // mounted under "form"
})
const store = createStore(reducer, composeEnhancers(...enhancers))

export default (story) => (
  <Provider store={store}>
    {story()}
  </Provider>
)
