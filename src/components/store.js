import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

function store(reducer) {
    return (
    createStore(
    reducer,
    composeWithDevTools()
    )
    )
}

export default store