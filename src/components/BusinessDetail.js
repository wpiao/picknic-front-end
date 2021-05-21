import React from 'react';
import { Button, Container } from 'react-bootstrap';
import BusinessCarousel from './BusinessCarousel.js';
import BusinessInfo from './BusinessInfo';

class BusinessDetail extends React.Component {
  render() {
    return (
      <Container style={{ textAlign: "center" }}>
        <BusinessCarousel business={this.props.business} />
        <br />
        {this.props.isAuthenticated ?
          <Button className="px-5" variant="primary" onClick={this.props.handleSave}>Save</Button>
          : ''
        }
        <BusinessInfo business={this.props.business} />
      </Container>
    )
  }
}

export default BusinessDetail;
