import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Router from './Routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();