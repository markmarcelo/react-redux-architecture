// While it is certainly possible to manually create action objects everywhere,
// and write each type value by hand, defining reusable constants makes maintaining
// code easier. If you put constants in a separate file, you can check your import
// statements against typos so you can't accidentally use the wrong string.

export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const COMPLETE_ALL = 'COMPLETE_ALL'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
