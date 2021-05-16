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
      businesses: [],
      location: '',
      term: ''
    }
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleShowcard = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/business/${id}`);
    console.log(res);
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

  getBusinessData = async (e) => {
    e.preventDefault();
    try {
      const businessData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/businesses/search`,
        {
          params: {
            term: this.state.term,
            location: this.state.location
          }
        });
      this.setState({
        businesses: businessData.data,
        term: '',
        location: ''
      });
    } catch (err) {
      this.setState({ error: `${err.message}` });
    }
  };

  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Header isAuthenticated={isAuthenticated} />
        <Main
          businesses={this.state.businesses}
          handleOnChange={this.handleOnChange}
          handleSubmit={this.getBusinessData}
          term={this.state.term}
          location={this.state.location}
          handleShowcard={this.handleShowcard}
        />
        <Footer />
      </>
    )
  }
}

export default withAuth0(App);
