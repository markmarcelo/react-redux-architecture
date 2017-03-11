import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Logo from '../branding/Logo.jsx';
import Nav from '../navbar/Nav.jsx';
import store from '../../store';
import * as types from '../../actions/action-types.js';
import clickHeaderNav from '../../actions/creators/header-actions.js';

class HeaderContainer extends React.Component {

  // handleNavClick(event) {
  //
  //   const attr = event.target.attributes;
  //   const ckey = attr['data-ckey'].value;
  //
  //   // Update state
  //   store.dispatch({
  //     type: types.NAVIGATE,
  //     selectedKey: ckey,
  //     items: this.props.items
  //   });
  // }

  render() {
    return (
      <div className="header container-fluid">
        <div className="pull-left">
          <Logo ckey={this.props.items[0].ckey} label={this.props.logo} handler={this.props.handleNavClick}/>
        </div>
        <div className="pull-right">
          <Nav items={this.props.items} handler={this.props.handleNavClick}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    logo: store.headerState.logo,
    selectedKey: store.headerState.selectedKey,
    selectedIndex: store.headerState.selectedIndex,
    items: store.headerState.items
  };
}

const mapDispatchToProps = function(dispatch) {
  return {
    handleNavClick: (id) => {
      dispatch(clickHeaderNav(id));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
