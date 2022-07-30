import {useDispatch, useSelector} from "react-redux";

const AnecdotesList = () => {
    const dispatch = useDispatch()

    const anecdotes = useSelector(state => state.anecdotes)

    const sortedAnecdotes = [...anecdotes]

    sortedAnecdotes.sort((a, b) => b.votes - a.votes)

    const voteHandler = (id) => {
        dispatch({type: 'anecdotes/vote', payload: id})
    }

    return (
        <div>
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
        </div>
    )
}

export default AnecdotesList
