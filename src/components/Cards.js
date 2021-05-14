import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';



class Cards extends React.Component {
  render() {
    return (
      <div>
        <CardColumns>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardColumns>
      </div>
    )
  }
}

export default Cards;
