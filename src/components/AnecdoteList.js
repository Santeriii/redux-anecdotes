import React, { useState } from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'
import { useDispatch, useSelector } from 'react-redux'
import Notification from './Notification'

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    const [notificationHidden, setNotificationHidden] = useState(true)

    const voteFunc = (id, content) => {
        dispatch(vote(id))
        dispatch(notificationChange('you voted "' + content + '"'))
        setNotificationHidden(false)
        setTimeout(() => {
            setNotificationHidden(true)
        }, 5000)
    }

    return (
        <div>
            {!notificationHidden &&
                <Notification />
            }
            {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
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

