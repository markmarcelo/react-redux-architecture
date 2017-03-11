import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes'

// the initial state
// passed as default param of reducers(state = initialState, action)
const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

// The export statement is used to export functions, objects or primitives from a given file (or module).

// Named exports are useful to export several values. During the import,
// one will be able to use the same name to refer to the corresponding value.

// Concerning the default export, there is only a single default export per module.
// A default export can be a function, a class, an object or anything else.
//This value is to be considered as the "main" exported value since it will be the simplest to import.
export default function todos(state = initialState, action) {

  // all actions return a new instance of the state

  switch (action.type) {

    // this first example uses the spread operator to demonstrate a push to state
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1, // generate unique id
          completed: false,
          text: action.text
        },
        ...state
      ]

    case DELETE_TODO:
      // filters all objects who's id is not what was passed through
      return state.filter(todo =>
        todo.id !== action.id
      )

    case EDIT_TODO:
      // use of spread to update single object property
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, text: action.text } :
          todo
      )

    case COMPLETE_TODO:
      // use of spread and ! to toggle and update single object property
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, completed: !todo.completed } :
          todo
      )

    case COMPLETE_ALL:
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }))

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false)

    default:
      return state
  }
}
