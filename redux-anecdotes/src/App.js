import { useSelector, useDispatch } from 'react-redux'
import {toggleVote} from "./reducers/anecdoteReducer";
import AnecdotesForm from "./components/AnecdotesForm";

const sortByLikes = (a, b) => {
    return b.votes - a.votes
}

const App = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)
  const sortedAnecdotes = anecdotes.sort(sortByLikes)

  const voteHandler = (id) => {
    dispatch(toggleVote(id))
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
      <AnecdotesForm/>
    </div>
  )
}

export default App
