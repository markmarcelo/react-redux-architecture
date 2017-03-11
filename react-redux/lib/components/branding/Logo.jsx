import React from 'react';

const Logo = (props) => {
  const onClick = (event) => {
    props.handler(props.ckey);
  };
  return (
    <h2 className='logo' onClick={onClick}>{props.label}</h2>
  );
};

export default Logo;
