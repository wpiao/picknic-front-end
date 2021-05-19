import React from 'react';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    const isAuthenticated = this.props.isAuthenticated;
    return (
      <header>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">PICKNIC</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            {isAuthenticated ?
              <Nav.Link>
                <Link to="/profile">Profile</Link>
              </Nav.Link>
              : ''
            }
          </Nav>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Navbar>
      </header>
    )
  }
}

export default Header;
