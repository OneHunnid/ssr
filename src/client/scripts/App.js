import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Header from './Header'
import Routes from './Routes'

class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <main>
        <Header />
        <Routes {...this.props}/>
      </main>
    )
  }
}

export default App;
