import { addExpense, editExpense, removeExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'

test('should setup remove expense action object', () => {
    const action = removeExpense('123abc')
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { 'note': 'i have some news' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { 'note': 'i have some news' }
    }) 
})

test('should setup add expense object with provided values', () => {
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})