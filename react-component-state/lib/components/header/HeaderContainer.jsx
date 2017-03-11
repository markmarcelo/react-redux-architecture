import React, { PropTypes } from 'react';
import Logo from '../branding/Logo.jsx';
import Nav from '../navbar/Nav.jsx';

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: 'React Website',
      selectedKey: '',
      items: this.getNavState(0)
    }
  }

  getNavState(index) {
    return [
      { ckey: 0, label: 'HOME', route: '/', isSelected: index === 0},
      { ckey: 1, label: 'GET STARTED', route: '/start', isSelected: index === 1},
      { ckey: 2, label: 'GITHUB', route: 'https://www.github.com/dcarrsf/react-structure', isSelected: index == 2}
    ]
  }

  handleNavClick(event) {

    const attr = event.target.attributes;
    const ckey = attr['data-ckey'].value;
    const index = this.state.findIndex((item) => {
      return item.ckey === ckey;
    });
    // Set state
    this.setState({
      selectedKey: ckey,
      items: this.getNavState(index)
    })
  }

  render() {
    return (
      <div className="header container-fluid">
        <div className="pull-left">
          <Logo ckey={this.state.items[0].ckey} label={this.state.logo} handler={this.handleNavClick.bind(this)}/>
        </div>
        <div className="pull-right">
          <Nav items={this.state.items} handler={this.handleNavClick.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default HeaderContainer;
