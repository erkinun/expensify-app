import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

console.log('im alive')

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = (
    {
        id
    } = {}
) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text: text
})

const sortByDate = () => ({
    type: 'SET_SORT_BY',
    sortBy: 'date'
})

const sortByAmount = () => ({
    type: 'SET_SORT_BY',
    sortBy: 'amount'
})

const setStartDate = (start = undefined) => ({
    type: 'SET_START_DATE',
    start
})

const setEndDate = (end = undefined) => ({
    type: 'SET_END_DATE',
    end
})


const defaultExpenseState = []

const expensesReducer = (state = defaultExpenseState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense 
            ]
        case 'REMOVE_EXPENSE':
            console.log('we are going to remove')
            return state.filter(exp => exp.id !== action.id)
        default:
            return state
    }
}

const defaultFilterState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = defaultFilterState, action) => {
    switch(action.type) {
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text 
            }
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.sortBy
            }
        case 'SET_START_DATE': 
            return  {
                ...state,
                startDate: action.start
            }
        case 'SET_END_DATE': 
            return  {
                ...state,
                endDate: action.end
            }            
        default:
            return state
    }
}


const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter(expense => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate 
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = typeof text !== 'string' || 
            expense.description.toLowerCase().includes(text.toLocaleLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1 
        } 
        else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1 
        }
    })
}

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const elementOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 2000 }))
const elementTwo = store.dispatch(addExpense({ description: 'Lending', amount: 200, createdAt: 10 }))
const elementThree = store.dispatch(addExpense({ description: 'Lending', amount: 500, createdAt: 5000 }))

store.dispatch(sortByAmount())

/* store.dispatch(removeExpense({ id: elementOne.expense.id }))

store.dispatch(setTextFilter('rent'))
store.dispatch(setTextFilter())

store.dispatch(sortByAmount())
store.dispatch(sortByDate())
*/
//store.dispatch(setStartDate(125000))
//store.dispatch(setEndDate(5))
//store.dispatch(setEndDate())
//store.dispatch(setStartDate())
//store.dispatch(setEndDate(100)) 

//store.dispatch(setTextFilter('rent'))