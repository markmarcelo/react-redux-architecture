import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import HomeView from './HomeView.jsx';
import store from '../../store';
import * as types from '../../actions/action-types.js';
import getClickTrackAction from '../../actions/creators/page-actions.js';

class HomeContainer extends React.Component {

  // handlePageClick(event) {
  //   store.dispatch({
  //     type: types.CLICK_TRACK,
  //     button: event.target
  //   });
  // }

  render() {
    return (
      <HomeView ui={this.props.ui} handler={this.props.handlePageClick} />
    );
  }
}

const mapStateToProps = function(store) {
  return {
    route: store.homeState.route,
    ui: store.homeState.ui
  };
}

const mapDispatchToProps = function(dispatch) {
  return {
    handlePageClick: (target) => {
      dispatch(getClickTrackAction(target));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
