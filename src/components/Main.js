import React from 'react';
import BusinessColumns from './BusinessColumns.js';
import BusinessCarousel from './BusinessCarousel.js'
import SearchBar from './SearchBar';

class Main extends React.Component {
  render() {
    return (
      <>
        <SearchBar
          handleOnChange={this.props.handleOnChange}
          handleSubmit={this.props.handleSubmit}
          term={this.props.term}
          location={this.props.location}
        />
        <BusinessCarousel
          business={this.props.business}
        />
        <BusinessColumns
          businesses={this.props.businesses}
          handleShowcard={this.props.handleShowcard}
        />
      </>
    )
  }
}

export default Main;
