import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

export const toggleVote = id => {
  return {
    type: 'VOTE',
    id: id
  }
}

export const createAnecdote = content => {
  return {
    type: 'NEW ANECDOTE',
    data: {
      content,
      likes: 0,
      id: generateUniqueID()
    }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "VOTE": {
      const id = action.id
      const anecdoteToChange = state.find(a => a.id === id)
      const anecdoteVotes = anecdoteToChange.votes + 1
      const changedAnecdote = {
        ...anecdoteToChange, votes: anecdoteVotes
      }
      return state.map(anecdote =>
      anecdote.id !== id ? anecdote : changedAnecdote)
    }
    case "NEW ANECDOTE": {
      const newAnecdote = ({
        content: action.data.content,
        likes: action.data.likes,
        id: action.data.id
      })
      return [...state, newAnecdote]
    }
    default:
      return state
  }
}

export default reducer
