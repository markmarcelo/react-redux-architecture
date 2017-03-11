import React from 'react';
import {render} from 'react-dom';
import HeaderContainer from './components/header/HeaderContainer.jsx';
import HomeContainer from './pages/home/HomeContainer.jsx';
import './styles/main.scss';

render(
  <div>
    <HeaderContainer/>
    <HomeContainer/>
  </div>
  , document.getElementById('root')
);
