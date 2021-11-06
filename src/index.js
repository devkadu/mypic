import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Global from './styles/global';
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <Global/>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);