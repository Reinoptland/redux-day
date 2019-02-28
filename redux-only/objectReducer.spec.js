const {reducer} = require('./objectReducer')

test('Initial state should be Charles Eamnes, age 75', () => {
  expect(reducer()).toEqual({
    firstName: 'Charles',
    lastName: 'Eamnes',
    age: 75
  })
})

test('Set the first name to Bob using SET_FIRST_NAME', () => {
  const initialState = {
    firstName: 'FirstName',
    lastName: 'LastName',
    age: 123
  }

  // this deep clones the initial state, so we can check for mutations
  const originalStateFrozen = JSON.parse(JSON.stringify(initialState))

  const action = {
    type: 'SET_FIRST_NAME',
    payload: 'Bob'
  }

  const newState = reducer(initialState, action)
  expect(newState.firstName).toBe('Bob')
  // checks for mutations in the state
  expect(originalStateFrozen).toEqual(initialState)
})

test('Set the last name to Bob using SET_LAST_NAME', () => {
    const initialState = {
      firstName: 'SomeName',
      lastName: 'LastName',
      age: 1234
    }
    const originalStateFrozen = JSON.parse(JSON.stringify(initialState))
  
    const action = {
      type: 'SET_LAST_NAME',
      payload: 'Bob'
    }
    const newState = reducer(initialState, action)
  
    expect(newState.lastName).toBe('Bob')
    expect(originalStateFrozen).toEqual(initialState)
  })
  
  test('Set the age to 12345 using SET_AGE', () => {
    const initialState = {
      firstName: 'SomeFirstName',
      lastName: 'LastName',
      age: 789798
    }
    const originalStateFrozen = JSON.parse(JSON.stringify(initialState))
  
    const action = {
      type: 'SET_AGE',
      payload: 12345
    }
    const newState = reducer(initialState, action)
  
    expect(newState.age).toBe(12345)
    expect(originalStateFrozen).toEqual(initialState)
  })