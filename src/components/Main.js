import React from 'react';
import BusinessColumns from './BusinessColumns.js';
//import BusinessCarousel from'./BusinessCarousel.js'

class Main extends React.Component {
  render() {
    return (
      <>
        <BusinessColumns businesses={this.props.businesses} />
        {/* <BusinessCarousel restaurant={this.props.businesses}/>  */}
      </>
    )
  }
}

export default Main;
