import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const props = window.PROPS;

ReactDOM.render(
  <App {...props}/>,
  document
);
