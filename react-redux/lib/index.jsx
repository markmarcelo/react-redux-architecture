import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import store from './store.js';

import HeaderContainer from './components/header/HeaderContainer.jsx';
import HomeContainer from './pages/home/HomeContainer.jsx';
import './styles/main.scss';

render(
  <Provider store={store}>
    <div>
      <HeaderContainer/>
      <HomeContainer/>
    </div>
  </Provider>
  , document.getElementById('root')
);
