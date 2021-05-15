import React from 'react';
import BusinessColumns from './BusinessColumns.js';

class Main extends React.Component {
  render() {
    return (
      <>
        <BusinessColumns businesses={this.props.businesses} />
      </>
    )
  }
}

export default Main;
