
import { createStore } from 'redux'

const setCount = ({ count = 1 } = {}) => ({
    type: 'SET',
    count 
})

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            }
        case 'DECREMENT': 
            const decrementValue = typeof action.decrementBy === 'number' ? action.decrementBy : 1 
            return {
                count: state.count - decrementValue
            }
        case 'SET': 
            return {
                count: action.count 
            }
        case 'RESET': {
            return {
                count: 0 
            }   
        }
         default: 
            return state;
    }
}

const store = createStore(countReducer)

store.subscribe(() => {
    console.log(store.getState())
})

console.log(store.getState())

store.dispatch({
    type: 'INCREMENT'
})

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 5
})

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 5
})

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 5
})

store.dispatch(setCount({count: 100}))