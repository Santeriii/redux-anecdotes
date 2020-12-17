import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import reducer from './reducers/anecdoteReducer'
import store from './components/store'

const generatedStore = store(reducer)

ReactDOM.render(
  <Provider store={generatedStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)