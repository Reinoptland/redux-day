
const {reducer} = require('./arrayReducer.js')

test('Initial state should contain one dog', () => {
  expect(reducer().length).toBe(1)
})

test('ADD_DOG should add a new dog to the state', () => {
  const action = {
    type: 'ADD_DOG',
    payload: {
      name: 'Second dog',
      isAGoodBoy: false
    }
  }

  const initialState = []
  // this deep clones the initial state, so we can check for mutations
  const originalStateFrozen = JSON.parse(JSON.stringify(initialState))

  expect(reducer(initialState, action).length).toBe(1)
  // checks for mutations in the state
  expect(originalStateFrozen).toEqual(initialState)
})

test('It should be possible to add two dogs to the state', () => {
  const actionOne = {
    type: 'ADD_DOG',
    payload: {
      name: 'Snoop Dog',
      isAGoodBoy: true
    }
  }
  const actionTwo = {
    type: 'ADD_DOG',
    payload: {
      name: 'The new Dog in town',
      isAGoodBoy: true
    }
  }

  const stateAfterActionOne = reducer([], actionOne)
  const originalStateFrozen = JSON.parse(JSON.stringify(stateAfterActionOne))

  expect(reducer(stateAfterActionOne, actionTwo).length).toBe(2)
  expect(originalStateFrozen).toEqual(stateAfterActionOne)
})

test('SET_DOGS should set the full dogs state to an empty array', () => {
    const action = {
      type: 'SET_DOGS',
      payload: []
    }
  
    const initialState = reducer()
    const originalStateFrozen = JSON.parse(JSON.stringify(initialState))
  
    expect(reducer(initialState, action).length).toBe(0)
    expect(originalStateFrozen).toEqual(initialState)
  })
  
  test('SET_DOGS should set the full dogs state to an array of dogs from the payload', () => {
    const action = {
      type: 'SET_DOGS',
      payload: [
        {
          name: 'The new Dog in town',
          isAGoodBoy: true
        },
        {
          name: 'Snoop Dog',
          isAGoodBoy: true
        }
      ]
    }
  
    const initialState = reducer()
    const originalStateFrozen = JSON.parse(JSON.stringify(initialState))
  
    expect(reducer(initialState, action).length).toBe(2)
    expect(originalStateFrozen).toEqual(initialState)
  })
  
  test('SET_DOGS should create new copies of the dog objects', () => {
    const action = {
      type: 'SET_DOGS',
      payload: [
        {
          name: 'The new Dog in town',
          isAGoodBoy: true
        },
        {
          name: 'Snoop Dog',
          isAGoodBoy: true
        }
      ]
    }
  
    const initialState = reducer()
    const originalStateFrozen = JSON.parse(JSON.stringify(initialState))
    const newState = reducer(initialState, action)
    
    expect(newState[0]).not.toBe(action.payload[0])
    expect(newState[1]).not.toBe(action.payload[1])
  })