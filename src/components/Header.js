import React from 'react';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">PICKNIC</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          {this.props.isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Navbar>
      </header>
    )
  }
}

export default Header;
