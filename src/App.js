import React from 'react';
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
      .then(response => {
        this.setState({
          businesses: response.data
        });
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App;
