import {useDispatch, useSelector} from "react-redux";

const AnecdotesList = () => {
    const dispatch = useDispatch()

    const anecdotes = useSelector(state => state.anecdotes)

    const sortedAnecdotes = [...anecdotes]

    sortedAnecdotes.sort((a, b) => b.votes - a.votes)

    const voteHandler = (id, content) => {
        dispatch({type: 'anecdotes/vote', payload: id})
        dispatch({type: 'notification/showVoteNotification', payload: content})
        setTimeout(() => {dispatch({type: 'notification/hideNotification'})}, 5000)
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
                        <button onClick={() => {voteHandler(anecdote.id, anecdote.content)}}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdotesList
