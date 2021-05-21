import React from 'react';
import BusinessColumns from './BusinessColumns.js';
import BusinessDetail from './BusinessDetail.js'
import SearchBar from './SearchBar.js';
import { Switch, Route } from 'react-router-dom';
import Profile from './Profile.js';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/">
            <SearchBar
              handleOnChange={this.props.handleOnChange}
              handleSubmit={this.props.handleSubmit}
              term={this.props.term}
              location={this.props.location}
            />
            <BusinessColumns
              businesses={this.props.businesses}
              handleShowcard={this.props.handleShowcard}
            />
          </Route>
          <Route exact path="/business/:id">
            <BusinessDetail
              business={this.props.business}
              handleSave={this.props.handleSave}
              isAuthenticated={this.props.isAuthenticated}
            />
          </Route>
          {this.props.isAuthenticated ?
            <Route exact path="/profile">
              <Profile
                savedBusinesses={this.props.savedBusinesses}
                getFavoriteBusiness={this.props.getFavoriteBusiness}
                handleDelete={this.props.handleDelete}
              />
            </Route>
            : ''
          }
        </Switch>
      </main>
    )
  }
}

export default Main;
