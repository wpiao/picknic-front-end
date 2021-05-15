import React from 'react';
import { Card } from 'react-bootstrap';

class Business extends React.Component {
  render() {
    const business = this.props.business;
    return (
      <Card>
        <Card.Img variant="top" src={business.image_url} />
        <Card.Body>
          <Card.Title>{business.name}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default Business;
