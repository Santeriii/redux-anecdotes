import React from 'react'
import { createStore } from 'redux'
import anecdoteReducer from './reducers/anecdoteReducer'

const store = createStore(anecdoteReducer)

const App = () => {
  const vote = (id) => {
    store.dispatch({
      type: 'VOTE',
      data: { id }
    })
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {store.getState().map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}

            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form>
        <div><input /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App