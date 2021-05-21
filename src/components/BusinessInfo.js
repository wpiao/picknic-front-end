import React from 'react';
import { ListGroup } from 'react-bootstrap';

class BusinessInfo extends React.Component {
  render() {
    const business = this.props.business;
    return (
      <>
        <ListGroup variant="flush" className="mt-3" style={{ textAlign: "left" }}>
          <ListGroup.Item><b>{business.name}</b></ListGroup.Item>
          <ListGroup.Item>{business.display_phone}</ListGroup.Item>
          <ListGroup.Item>{business.location && business.location.display_address.join(', ')}</ListGroup.Item>
          <ListGroup.Item>Price: {business.price}</ListGroup.Item>
          <ListGroup.Item>Yelp Rating: {business.rating}</ListGroup.Item>
          <ListGroup.Item>Reviews counts: {business.review_count}</ListGroup.Item>
        </ListGroup>
      </>
    )
  }
}

export default BusinessInfo;
