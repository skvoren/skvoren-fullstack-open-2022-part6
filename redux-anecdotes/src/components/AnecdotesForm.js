import {createAnecdote} from "../reducers/anecdoteReducer";
import {useDispatch} from "react-redux";

const AnecdotesForm = () => {

    const dispatch = useDispatch()

    const newAnecdoteHandler = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={newAnecdoteHandler}>
                <div><input name="anecdote" /></div>
                <button>create</button>
            </form>
        </div>
        )
}

export default AnecdotesForm
