import React from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    }
  }

  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/yelp`)
      .then(res => {
        this.setState({
          businesses: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Header isAuthenticated={isAuthenticated} />
        <Main businesses={this.state.businesses} />
        <Footer />
      </>
    )
  }
}

export default withAuth0(App);
