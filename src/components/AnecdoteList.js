import React, { useEffect, useState } from 'react'
import { vote, initializeAnecdotes } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'
import { useDispatch, useSelector } from 'react-redux'
import Notification from './Notification'
import Filter from './Filter'

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)
    const [filteredAnecdotes, setFilteredAnecdotes] = useState([])


    useEffect(() => {
        setFilteredAnecdotes([])
        console.log(anecdotes)
        setFilteredAnecdotes(anecdotes.filter(a => a.content === filter))
    }, [filter, anecdotes])

    useEffect(() => {
        dispatch(initializeAnecdotes())
    }, [dispatch])

    const voteFunc = (id, content) => {
        dispatch(vote(id))
        console.log(filteredAnecdotes)
        dispatch(notificationChange('you voted "' + content + '"', 5))
    }

    return (
        <div>
            <Filter />
            <Notification />
            {filteredAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}

                    <button onClick={() => voteFunc(anecdote.id, anecdote.content)}>vote</button>
                </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList

