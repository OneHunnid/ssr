import React from 'react'
import { Switch, Route } from 'react-router'

import Home from './Home'
import About from './About'
import NotFound from './NotFound'

class Routes extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </main>
    )
  }
}

export default Routes;
