import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

import {BrowserRouter} from 'react-router-dom'
// import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter basename='/rob.co'>
          <App />
        </BrowserRouter>
);

