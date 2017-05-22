import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import NotFound from './NotFound'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={ () => <Home {...this.props} />} />
        <Route path="/about" render={ () => <About {...this.props}  />} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default Routes;
