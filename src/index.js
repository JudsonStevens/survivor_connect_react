import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'semantic-ui-css/semantic.css'
import App from './containers/App';
import NavBar from './containers/NavBar'

ReactDOM.render(
  <div id='base-container'>
    <NavBar />
    <App />
  </div>, 
  document.getElementById('root')
);
