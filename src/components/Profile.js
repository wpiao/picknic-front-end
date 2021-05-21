import React from 'react';
import { Container, CardColumns } from 'react-bootstrap';
import Business from './Business.js';

class Profile extends React.Component {

  componentDidMount = () => {
    this.props.getFavoriteBusiness();
  }

  render() {
    return (
      <Container>
        <div>
          <h1 className="py-3">My Favorite Restaurants</h1>
          <CardColumns>
            {this.props.savedBusinesses.map((business, i) =>
              <Business
                key={i}
                business={business}
                handleShowcard={this.props.handleShowcard}
                handleDelete={this.props.handleDelete}
              />)}
          </CardColumns>
        </div>
      </Container>
    )
  }
}

export default Profile;
