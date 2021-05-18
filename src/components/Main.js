import React from 'react';
import BusinessColumns from './BusinessColumns.js';
import BusinessDetail from './BusinessDetail.js'
import SearchBar from './SearchBar.js';
import { Switch, Route } from 'react-router-dom';

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
        <Switch>
          <Route exact path="/business/:id">
            <BusinessDetail
              business={this.props.business}
            />
          </Route>
          <Route exact path="/">
            <BusinessColumns
              businesses={this.props.businesses}
              handleShowcard={this.props.handleShowcard}
            />
          </Route>
        </Switch>
      </>
    )
  }
}

export default Main;
