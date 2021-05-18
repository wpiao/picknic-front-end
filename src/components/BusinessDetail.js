import React from 'react';
import { Button } from 'react-bootstrap';
import BusinessCarousel from './BusinessCarousel.js';
import BusinessInfo from './BusinessInfo';

class BusinessDetail extends React.Component {
  render() {
    return (
      <>
        <BusinessCarousel business={this.props.business} />
        <Button className="primary">Save</Button>
        <Button className="primary">Rate</Button>
        <BusinessInfo business={this.props.business}
        />

      </>
    )
  }
}

export default BusinessDetail;
