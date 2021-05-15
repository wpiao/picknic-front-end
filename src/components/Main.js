import React from 'react';
import Business from './Business';
import { Container, CardColumns } from 'react-bootstrap';

class Main extends React.Component {
  render() {
    return (
      <>
        <h1>This is Main</h1>
        <Container>
          <CardColumns>
            {this.props.businesses.map(business =>
              <Business business={business} />)}
          </CardColumns>
        </Container>
      </>
    )
  }
}

export default Main;
