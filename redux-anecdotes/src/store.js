import {combineReducers} from "redux";
import anecdoteReducer from "./reducers/anecdoteReducer";
import {configureStore} from "@reduxjs/toolkit";

const reducer = combineReducers({
    anecdotes: anecdoteReducer
})

export const store = configureStore({reducer})

