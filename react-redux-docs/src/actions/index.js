import * as types from '../constants/ActionTypes'

// Actions are payloads of information that send data from your application to your store.
// They are the only source of information for the store. You send them to the store through dispatching.

// Action creators functions that create actions. In Redux action creators simply return an action:

export const addTodo = text => ({ type: types.ADD_TODO, text })
export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
export const completeAll = () => ({ type: types.COMPLETE_ALL })
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })
