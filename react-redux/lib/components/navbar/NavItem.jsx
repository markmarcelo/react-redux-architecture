import React from 'react';

const NavItem = (props) => {

  const onClick = (event) => {
    props.handler(props.ckey);
  }
  const cls = 'navItem' + (props.isSelected ? ' active' : '');
  return (
    <li className={cls}>
      <a href="#" onClick={onClick}>
        {props.label}
      </a>
    </li>
  );
}

export default NavItem;
