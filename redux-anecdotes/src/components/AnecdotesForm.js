import { connect } from "react-redux";
import {createAnecdote} from "../reducers/anecdoteReducer";
import {hideNotification, showCreateAnecdoteNotification} from "../reducers/notificationReducer";
import {getNotificationTimeOut, setNotificationTimeOut} from "./NotificationTimeout";

const AnecdotesForm = (props) => {

    let timeOut = getNotificationTimeOut()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.createAnecdote(content)
        props.showCreateAnecdoteNotification(content)
        if (timeOut > 0) {
            clearTimeout(timeOut)
        }
        setNotificationTimeOut(setTimeout(() => props.hideNotification(), 5000))
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
