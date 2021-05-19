import React from 'react';
import { Card } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'

class Business extends React.Component {
  handleClick = () => {
    const id = this.props.business.id
    this.props.handleShowcard(id);
    this.props.history.push(`/business/${id}`)
  }

  render() {
    const business = this.props.business;
    return (
      <Card onClick={this.handleClick}>
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

export default withRouter(Business);
