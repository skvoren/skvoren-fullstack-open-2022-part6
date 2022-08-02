import {createSlice} from "@reduxjs/toolkit";

const initialState = ''

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        showVoteNotification(state, action) {
            const message = `you voted "${action.payload}"`
            return [message, ...state]
        },
        showCreateAnecdoteNotification(state, action) {
            const message = `created anecdote "${action.payload}"`
            return [message, ...state]
        },
        hideNotification(state) {
            return state.filter(message => message === '')
        }
    }
})

export const {showVoteNotification, showCreateAnecdoteNotification, hideNotification} = notificationSlice.actions

export default notificationSlice.reducer
