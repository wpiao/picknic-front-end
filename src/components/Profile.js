import React from 'react';
import { Container, CardColumns } from 'react-bootstrap';
import Business from './Business.js';


class Profile extends React.Component {

  componentDidMount(){
    this.props.getBusinessInfo();
  }
  render() {
    return (
      <>
        <h1>This is Profile component</h1>
        <Container>
        <CardColumns>
          {this.props.savedBusinesses.map((business, i) => <Business key={i} business={business} handleShowcard={this.props.handleShowcard}/>)}
        </CardColumns>
      </Container>
      </>
    )
  }
}

export default Profile;
