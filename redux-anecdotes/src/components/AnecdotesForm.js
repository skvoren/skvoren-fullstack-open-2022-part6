import {useDispatch} from "react-redux";
import {createAnecdote} from "../reducers/anecdoteReducer";

const AnecdotesForm = () => {

    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        dispatch({type: 'notification/showCreateAnecdoteNotification', payload: content})
        setTimeout(() => {dispatch({type: 'notification/hideNotification'})}, 5000)
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name="anecdote" /></div>
                <button>create</button>
            </form>
        </div>
        )
}

export default AnecdotesForm
