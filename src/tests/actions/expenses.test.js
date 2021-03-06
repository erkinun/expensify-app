import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { 
    addExpense, editExpense, removeExpense, startAddExpense, 
    setExpenses, startSetExpenses, startRemoveExpense, 
    startEditExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const uid = 'this_is_my_test_uid'
const defaultAuthState = { auth: { uid } }
const createMockStore = configureMockStore([thunk])

beforeEach((done) => {

    const expensesData = {}
    expenses.forEach(({ id, description, note, amount, createdAt}) => {
        expensesData[id] = { description, note, amount, createdAt }
    })

    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done())
})

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

test('should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState)
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    }

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test('should add the default expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState)
    const expenseData = {}
    const dData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }


    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...dData
            }
        })

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(dData)
        done()
    })
})

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done()
    })
})

test('should remove expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    store.dispatch(startRemoveExpense('1')).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id: '1'
        })
        done()
    })
})

test('should edit expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    store.dispatch(startEditExpense('1', expenses[0])).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id: '1',
            updates: expenses[0]
        })
        done()
    })
})