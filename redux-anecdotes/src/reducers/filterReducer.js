import {createSlice} from "@reduxjs/toolkit";

const initialState = ''

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter(action) {
            const value = action.payload
            const newState = ''
            return [...newState, value]
        },
        clearFilter() {
            return initialState
        }
}})

export default filterSlice.reducer
