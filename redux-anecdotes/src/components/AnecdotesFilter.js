import {useDispatch} from "react-redux";

const AnecdotesFilter = () => {

    const dispatch = useDispatch()

    const filterChangeHandler = (event) => {
        event.preventDefault()
        const value = event.target.value
        console.log(`value: ${value}`)
        if (value === '') {
            dispatch({type: 'filter/clearFilter'})
        } else {
            dispatch({type: 'filter/setFilter', payload: value})
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

export default AnecdotesFilter
