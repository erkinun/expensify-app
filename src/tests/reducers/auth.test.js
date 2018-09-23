import authReducer from '../../reducers/auth'

test('should set default state', () => {
  const state = authReducer(undefined, { type: 'HEDE' })
  expect(state).toEqual({})
})

test('should add a login id', () => {
  const action = {
    type: 'LOGIN',
    uid: 'hede'
  }

  const state = authReducer({}, action)

  expect(state).toEqual({
    uid: 'hede'
  })
})

test('should remove a login id when logout', () => {
  const action = {
    type: 'LOGOUT'
  }

  const state = authReducer({
    uid: 'hede'
  }, action)

  expect(state).toEqual({
  })
})