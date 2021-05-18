import React from 'react';
import BusinessColumns from './BusinessColumns.js';
import BusinessDetail from './BusinessDetail.js'
import SearchBar from './SearchBar.js';

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
        <BusinessDetail
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
