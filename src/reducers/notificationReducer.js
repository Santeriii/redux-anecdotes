import anecdoteService from '../services/anecdotes'

const notificationReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.notification
        default:
            return state
    }
}

export const notificationChange = ( notification, timeout ) => {
    return async dispatch => {
        await anecdoteService.setNotification(notification)
        dispatch({
            type: 'SET_NOTIFICATION',
            notification,
        })
        notification = ''
        setTimeout(() => {
            dispatch({
                type: 'SET_NOTIFICATION',
                notification,
            })
        }, timeout * 1000)
    }
}

export default notificationReducer