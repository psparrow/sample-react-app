import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './containers/App.jsx';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
