import React from 'react';
import Business from './Business.js';
import { Container, CardColumns, CardDeck } from 'react-bootstrap';

class BusinessColumns extends React.Component {
  render() {
    return (
      <Container>
        <CardDeck>
          <CardColumns>
            {this.props.businesses.map((business, i) => <Business key={i} business={business} />)}
          </CardColumns>
        </CardDeck>
      </Container>
    )
  }
}

export default BusinessColumns;
