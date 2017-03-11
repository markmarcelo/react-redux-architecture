import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import Header from '../components/Header'
// import MainSection from '../components/MainSection'
import * as NameOfAppActions from '../actions'

// "Provider" passes props implicitly by context
// todos and actions is a required specification of which PropTypes
const App = ({todos, actions}) => (
  <div>
    <Header addTodo={actions.addTodo} />
    <MainSection todos={todos} actions={actions} />
  </div>
)

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

// takes store state and returns props needed to pass to component
const mapStateToProps = state => ({
  todos: state.todos
})

// return callback props that depend on dispactch method
const mapDispatchToProps = dispatch => ({

  // bindActionCreators(actionCreators, dispatch)
  // Turns an object whose values are action creators, into an object with the same keys,
  // but with every action creator wrapped into a dispatch call so they may be invoked directly.
  actions: bindActionCreators(NameOfAppActions, dispatch)
})

// react-redux lib function that is a curried function containing which component to pass the props to
// the default connect() does not subscribe to store and passes params on line 10 as props
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
