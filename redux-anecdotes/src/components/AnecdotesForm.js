import { connect } from "react-redux";
import {createAnecdote} from "../reducers/anecdoteReducer";
import {hideNotification, showCreateAnecdoteNotification} from "../reducers/notificationReducer";

const AnecdotesForm = (props) => {

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.createAnecdote(content)
        props.showCreateAnecdoteNotification(content)
        setTimeout(() => props.hideNotification(content), 5000)
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


const mapDispatchToProps = {
    createAnecdote,
    showCreateAnecdoteNotification,
    hideNotification
}

const ConnectedAnecdotesForm = connect(null, mapDispatchToProps)(AnecdotesForm)
export default ConnectedAnecdotesForm
