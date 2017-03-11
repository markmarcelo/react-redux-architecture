import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux' // this import syntax is an ES6 feature
import App from './containers/App'
import reducer from './reducers' // often written as: import todoApp from './reducers'
// import 'example-css-file/index.css'


// The Store is the object that brings actions and reducers together.
// The store has the following responsibilities:

// Holds application state;
// Allows access to state via getState();
// Allows state to be updated via dispatch(action);
// Registers listeners via subscribe(listener);
// Handles unregistering of listeners via the function returned by subscribe(listener).

const store = createStore(reducer) // often written as: const store = createStore(todoApp) // see line 6


// The option we recommend is to use a special React Redux component called <Provider>
// to magically make the store available to all container components in the application
// without passing it explicitly. You only need to use it once when you render the root component:

// every component before recieves the store as a prop, including grandchildren
// "provider", from react-redux library, renders child and uses the react getChildContext feature
// condition: you must specify child context types
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
