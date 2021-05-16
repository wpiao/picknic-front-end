import React from 'react';
import { Carousel } from 'react-bootstrap';


export default class BusinessCarousel extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item style={{ width: '25rem' }}>
          <img
            fluid
            src="https://via.placeholder.com/150"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Place holder</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    )
  }
}
