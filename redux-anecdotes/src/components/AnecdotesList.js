import {useDispatch, useSelector} from "react-redux";
import {toggleVote} from "../reducers/anecdoteReducer";

const sortByLikes = (a, b) => {
    return b.votes - a.votes
}

const AnecdotesList = () => {
    const dispatch = useDispatch()

    const anecdotes = useSelector(state => state).sort(sortByLikes)

    const voteHandler = (id) => {
        dispatch(toggleVote(id))
    }
    return (
        <div>
            {anecdotes.map(anecdote =>
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
