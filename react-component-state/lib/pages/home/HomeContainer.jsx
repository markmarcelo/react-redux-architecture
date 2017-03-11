import React, { PropTypes } from 'react';
import HomeView from './HomeView.jsx';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ui: {
        jumbo: 'BIG BOLD TEXT',
        detail: 'Lorum ipsum dollar chizmet elnmernder lucit pedeum.',
        button: 'GET STARTED'
      },
      route: '/start'
    }
  }

  handlePageClick(event) {
    console.log("Route to: "+this.state.route);
  }

  render() {
    return (
      <HomeView ui={this.state.ui} handler={this.handlePageClick.bind(this)} />
    );
  }
}

export default HomeContainer;
