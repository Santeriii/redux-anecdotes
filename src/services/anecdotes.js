import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (content) => {
    const getId = () => (100000 * Math.random()).toFixed(0)
    const object = 
        {
            content: content,
            votes: 0,
            id: getId(),
        }
    const response = await axios.post(baseUrl, object)
    return response.data
}

const vote = async (id) => {
    const url = `${baseUrl}/${id}`
    const anecdotes = await axios.get(baseUrl)
    console.log(anecdotes)
    const anecdote = anecdotes.data.find(a => a.id === id)
    const changedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    
    const response = await axios.put(url, changedAnecdote)
    return response.data
}

export default { getAll, createNew, vote }