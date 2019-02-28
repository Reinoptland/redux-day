// index.spec.js
const {reducer} = require('./index')

test('Initial state should be 1', () => {
  expect(reducer()).toBe(1)
})

test('1 + ADD_ONE should be 2', () => {
  const action = {
    type: 'ADD_ONE'
  }
  expect(reducer(1, action)).toBe(2)
})

test('1 + ADD_TWO should be 3', () => {
  const action = {
    type: 'ADD_TWO'
  }
  expect(reducer(1, action)).toBe(3)
})

test('5 + ADD_TWO should be 7', () => {
  const action = {
    type: 'ADD_TWO'
  }
  expect(reducer(5, action)).toBe(7)
})

test('5 + ADD_THREE should be 8', () => {
  const action = {
    type: 'ADD_THREE'
  }
  expect(reducer(5, action)).toBe(8)
})

test('0 + ADD_THREE should be 3', () => {
  const action = {
    type: 'ADD_THREE'
  }
  expect(reducer(0, action)).toBe(3)
})