import React from 'react';

const Logo = (props) => <h2 data-ckey={props.ckey} className='logo' onClick={props.handler}>{props.label}</h2>

export default Logo;
