import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter } from 'react-router-dom';

import App from './App'

const props = window.PROPS;

ReactDOM.render(
  // <BrowserRouter>
    <App {...props} />,
  // </BrowserRouter>,
  document
);
