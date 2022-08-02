import {createSlice} from "@reduxjs/toolkit";

const initialState = ''

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter(state, action) {
            const value = action.payload
            const newState = ''
            return [...newState, value]
        },
        clearFilter() {
            return initialState
        }
}})

export const {setFilter, clearFilter} = filterSlice.actions

export default filterSlice.reducer
