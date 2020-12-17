import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import store from './components/store'
import { combineReducers } from 'redux'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer
})

const generatedStore = store(reducer)

ReactDOM.render(
  <Provider store={generatedStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)