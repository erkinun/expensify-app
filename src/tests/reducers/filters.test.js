import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy with amount', () => {
    const action = { type: 'SET_SORT_BY', sortBy: 'amount' }
    const state = filtersReducer(undefined, action)
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy with a different state', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = { type: 'SET_SORT_BY', sortBy: 'date' }
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

test('should set filter text', () => {
    const action = { type: 'SET_TEXT', text: 'hede' }
    const state = filtersReducer(undefined, action)
    expect(state.text).toBe('hede')
})

test('should set filter startdate', () => {
    const action = { type: 'SET_START_DATE', start: moment(0).add(1, 'month').valueOf() }
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toBe(moment(0).add(1, 'month').valueOf())
})

test('should set filter end', () => {
    const action = { type: 'SET_END_DATE', end: moment(0).add(1, 'month').valueOf() }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toBe(moment(0).add(1, 'month').valueOf())
})