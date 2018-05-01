import moment from 'moment'

import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test("should set default state", () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id is not there', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 532
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
})

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: 5,
            description: 'Hede',
            note: '',
            amount: 21500,
            createdAt: moment(1).valueOf()
        }
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, {id: 5,
        description: 'Hede',
        note: '',
        amount: 21500,
        createdAt: moment(1).valueOf()}])

})

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: 1,
        updates: {
            note: 'Hede'
        }
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([{
        id: 1,
        description: 'Gum',
        note: 'Hede',
        amount: 195,
        createdAt: moment(1).valueOf()}, expenses[1], expenses[2]])
})

test('should not edit an expense if id is not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: 521,
        updates: {
            note: 'Hede'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})
