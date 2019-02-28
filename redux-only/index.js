const redux = require('redux')

// index.js
const reducer = (state = 1, action = {}) => {
    switch(action.type) {
    case 'ADD_ONE':
      return state + 1
    case 'ADD_TWO':
      return state + 2
    case 'ADD_THREE':
      return state + 3
    default:
      return state
    }
  }
  

const store = redux.createStore(reducer)
console.log('Initial state of the store', store.getState())

store.subscribe(() => console.log('Next state:', store.getState()))

const action = {
  type: 'ADD_ONE'
}

store.dispatch(action)

const actionTwo = {
  type: 'ADD_TWO'
}

store.dispatch(actionTwo)

module.exports = { reducer }


