import {createSlice} from "@reduxjs/toolkit";

const initialState = ''

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        showNotification(state, action) {
            const message = action.payload
            return [...state, message]
        }
    }
})

export default notificationSlice.reducer
