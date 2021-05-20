import React from 'react';
import { Button, Container } from 'react-bootstrap';
import BusinessCarousel from './BusinessCarousel.js';
import BusinessInfo from './BusinessInfo';

class BusinessDetail extends React.Component {
  render() {
    return (
      <Container>
        <BusinessCarousel business={this.props.business} />
        <br/>
        <Button className="primary" onClick={this.props.handleSave}>Save</Button>
        <BusinessInfo business={this.props.business}/>
      </Container>
    )
  }
}

export default BusinessDetail;
