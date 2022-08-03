import {connect} from "react-redux";
import AnecdotesFilter from "./AnecdotesFilter";
import {vote} from "../reducers/anecdoteReducer";
import {hideNotification, showVoteNotification} from "../reducers/notificationReducer";
import {getNotificationTimeOut, setNotificationTimeOut} from "./NotificationTimeout";

const AnecdotesList = (props) => {

    let timeOut = getNotificationTimeOut()

    const anecdotes = props.filter !== '' ? props.anecdotes.filter(anecdote => anecdote.content.includes(props.filter))
        : props.anecdotes

    const sortedAnecdotes = [...anecdotes]

    sortedAnecdotes.sort((a, b) => b.votes - a.votes)

    const voteHandler = (id, content) => {
        props.vote(id)
        props.showVoteNotification(content)
        if (timeOut > 0) {
            clearTimeout(timeOut)
        }
        setNotificationTimeOut(setTimeout(() => props.hideNotification(), 5000))
    }

    return (
        <div>
            <AnecdotesFilter/>
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

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
        filter: state.filter,
        notification: state.notification
    }
}

const mapDispatchToProps = {
    vote,
    showVoteNotification,
    hideNotification
}

const ConnectedAnecdotesList = connect(mapStateToProps, mapDispatchToProps)(AnecdotesList)

export default ConnectedAnecdotesList
