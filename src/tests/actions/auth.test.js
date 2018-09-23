import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { login, logout } from '../../actions/auth'

const createMockStore = configureMockStore([thunk])

test('should set up login object', () => {
  const action = login('hede')
  expect(action).toEqual({
    type: 'LOGIN',
    uid: 'hede'
  })
})

test('should set up logout object', () => {
  const action = logout()
  expect(action).toEqual({
    type: 'LOGOUT'
  })
})