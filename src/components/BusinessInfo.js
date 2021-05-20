import React from 'react';

class BusinessInfo extends React.Component {
  render() {
    const business = this.props.business;
    return (
      <>
        <p>
          <br/>
          <ul class="list-group">
            <li class="list-group-item">{business.name}</li>
            <li class="list-group-item">{business.display_phone}</li>
            <li class="list-group-item">{business.location && business.location.display_address.join(', ')}</li>
            <li class="list-group-item">{business.price}</li>
            <li class="list-group-item">{business.transactions}</li>
          </ul>
        </p>
      </>
    )
  }
}

export default BusinessInfo;
