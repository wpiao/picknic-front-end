import React from 'react';
import { Card } from 'react-bootstrap';

class Business extends React.Component {
  render() {
    const business = this.props.business;
    return (
      <Card onClick={() => this.props.handleShowcard(business.id)}>
        <Card.Img variant="top" src={business.image_url} />
        <Card.Body>
          <Card.Title>{business.name}</Card.Title>
          <Card.Text>{business.location.display_address.join(' ')}</Card.Text>
          <Card.Text>{business.price}</Card.Text>
          <Card.Text>{`rating: ${business.rating}`}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default Business;
