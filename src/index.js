import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Router from './Routes';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var App = () => (
  <MuiThemeProvider>
    <Router />
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();