import {connect} from "react-redux";
import {clearFilter, setFilter} from "../reducers/filterReducer";

const AnecdotesFilter = (props) => {

    const filterChangeHandler = (event) => {
        event.preventDefault()
        const value = event.target.value
        if (value === '') {
            props.clearFilter()
        } else {
            props.setFilter(value)
        }
    }

    const style = {
        marginTop: 10,
        marginBottom: 10
    }

    return (
        <div style={style}>
            <input name="anecdotes-filter" onChange={filterChangeHandler}/>
        </div>
    )
}

const mapDispatchToProps = {
    clearFilter,
    setFilter
}


const ConnectedAnecdotesFilter = connect(null, mapDispatchToProps)(AnecdotesFilter)

export default ConnectedAnecdotesFilter
