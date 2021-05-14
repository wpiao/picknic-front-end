import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class Header extends React.Component {
  render() {
    return (
      <>
        <h1>This is Header</h1>
        <LoginButton />
        {!this.props.isAuthenticated ? '': <LogoutButton />}
      </>
    )
  }
}

export default Header;
