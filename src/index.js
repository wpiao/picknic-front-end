import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth0Provider
        domain="dev-5l6mow4x.us.auth0.com"
        clientId="Hfw3WNnjmDO7lvddV5Dusbdwl8SOo6Sw"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
