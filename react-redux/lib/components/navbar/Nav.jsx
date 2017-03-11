import React, { PropTypes } from 'react';
import NavItem from './NavItem.jsx';

class Nav extends React.Component {

  render() {

    let items = [];
    this.props.items.forEach((item, i) => {
      items.push(<NavItem key={i}
                          ckey={i}
                          label={item.label}
                          isSelected={item.isSelected}
                          handler={this.props.handler}/>);
    });
    return (
      <div className="nav navbar-nav">
        {items}
      </div>
    );
  }
}

export default Nav;
