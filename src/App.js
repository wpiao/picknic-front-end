import React from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

class App extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Header isAuthenticated={isAuthenticated}/>
        <Main />
        <Footer />
      </>
    )
  }
}

export default withAuth0(App);
