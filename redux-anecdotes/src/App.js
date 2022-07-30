import { useSelector, useDispatch } from 'react-redux'
import {createAnecdote, toggleVote} from "./reducers/anecdoteReducer";

const sortByLikes = (a, b) => {
    return b.votes - a.votes
}

const App = () => {
  const anecdotes = useSelector(state => state)
  const sortedAnecdotes = anecdotes.sort(sortByLikes)
  const dispatch = useDispatch()

  const voteHandler = (id) => {
    dispatch(toggleVote(id))
  }

  const newAnecdoteHandler = (event) => {
      event.preventDefault()
      const content = event.target.anecdote.value
      event.target.anecdote.value = ''
      dispatch(createAnecdote(content))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => {voteHandler(anecdote.id)}}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={newAnecdoteHandler}>
        <div><input name="anecdote" /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App
