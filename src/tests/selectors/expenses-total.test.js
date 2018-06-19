import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return 0 if there are no expenses', () => {
  const total = selectExpensesTotal([])
  expect(total).toEqual(0)  
})

test('should return the expense if there is only one expense', () => {
    const total = selectExpensesTotal([expenses[0]])
    expect(total).toEqual(195)
})

test('should return the total amount of all expenses', () => {
    const total = selectExpensesTotal(expenses)
    expect(total).toEqual(114195)
})