import React from 'react';

class NavItem extends React.Component {

  render() {
    const cls = 'navItem' + (this.props.isSelected ? ' active' : '');
    return (
      <li className={cls}>
        <a data-ckey={this.props.ckey} href="#" onClick={this.props.handler}>
          {this.props.label}
        </a>
      </li>
    );
  }
}

export default NavItem;
