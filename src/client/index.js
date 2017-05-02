import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router';

import App from './App'

const props = window.PROPS;

ReactDOM.render(
  <BrowserRouter>
    <App {...props} />
  </BrowserRouter>,
  document
);
