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

    return (
        <div>
            <input name="anecdotes-filter" onChange={filterChangeHandler}/>
        </div>
    )
}

export default AnecdotesFilter
