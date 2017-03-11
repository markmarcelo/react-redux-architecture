import React, { PropTypes } from 'react';

class HomeView extends React.Component {

  render() {

    return (
      <div className="page container">
        <div className="row">
          <div className="col-md-offset-2 col-md-8 content">
            <div className="jumbo">
              <p>{this.props.ui.jumbo}</p>
            </div>
            <p className="detail">{this.props.ui.detail}</p>
            <div className="btn btn-info btn-lg" onClick={this.props.handler}>{this.props.ui.button}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeView;
