import React from 'react';

class BusinessInfo extends React.Component {
  render() {
    const business = this.props.business;
    console.log('This is BusinessInfo', business);
    return (
      <>
        <h1>Hello from BusinessInfo</h1>
        <p>
          <ul>
            <li>{business.name}</li>
            <li>{business.display_phone}</li>
            <li>{business.location && business.location.display_address.join(', ')}</li>
            <li>{business.price}</li>
            <li>{business.transactions}</li>
          </ul>
        </p>
      </>
    )
  }
}

export default BusinessInfo;
