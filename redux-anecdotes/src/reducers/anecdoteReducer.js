import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import {createSlice} from "@reduxjs/toolkit";
import anecdotesService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      const newAnecdote = ({
        content: action.payload,
        votes: 0,
        id: generateUniqueID()
      })
      return [...state, newAnecdote]
    },
    vote(state, action) {
      const id = action.payload
      const anecdoteToChange = state.find(a => a.id === id)
      let votes = anecdoteToChange.votes
      votes++
      const changedAnecdote = {
        ...anecdoteToChange, votes: votes
      }
      return state.map(anecdote =>
          anecdote.id !== id ? anecdote : changedAnecdote)
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const {setAnecdotes, appendAnecdote, vote} = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
      dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export default anecdoteSlice.reducer
