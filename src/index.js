import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './Assets/css/style.css';
import App from './App';
import registerServiceWorker from './Utils/registerServiceWorker';


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
registerServiceWorker();
