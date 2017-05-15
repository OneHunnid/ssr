import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader'

import App from './App'
import '../styles/index.scss'

// const props = window.PROPS;
const root = document.querySelector('#root');

const render = (Component) => {
  ReactDOM.render(
    <BrowserRouter>
      <AppContainer>
        <App />
      </AppContainer>
    </BrowserRouter>,
    root
  );
};

render(App)

if (module.hot) {
  module.hot.accept();
}
