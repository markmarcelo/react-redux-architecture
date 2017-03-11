import { combineReducers } from 'redux'
import reducerExample from './reducerExample'

//  the most common approach to writing reducer logic for that state shape is to have 
// "slice reducer" functions, each with the same (state, action) signature, and each 
// responsible for managing all updates to that specific slice of state.

// combineReducers is simply a utility function to simplify the most common use case 
// when writing Redux reducers. You are not required to use it in your own application, 
// and it does not handle every possible scenario.
const rootReducer = combineReducers({
  reducerExample
})

export default rootReducer
