import React from 'react'
import { vote } from './reducers/anecdoteReducer'
import { useDispatch, useSelector } from 'react-redux'
import NewAnecdote from './components/NewAnecdote'

const App = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}

            <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <NewAnecdote />
    </div>
  )
}

export default App