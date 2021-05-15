import React from 'react';
import BusinessColumns from './BusinessColumns.js';

class Main extends React.Component {
  render() {
    return (
      <>
        <h1>This is Main</h1>
        <BusinessColumns businesses={this.props.businesses} />
      </>
    )
  }
}

export default Main;
