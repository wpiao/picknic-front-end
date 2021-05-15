import React from 'react';
import Business from './Business.js';
import { Container, CardColumns } from 'react-bootstrap';

class BusinessColumns extends React.Component {
  render() {
    return (
      <Container>
        <CardColumns>
          {this.props.businesses.map((business, i) => <Business key={i} business={business} />)}
        </CardColumns>
      </Container>
    )
  }
}

export default BusinessColumns;
