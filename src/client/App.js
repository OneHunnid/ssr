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
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
          <main>
            <Header />
            <Routes />
          </main>
          <script dangerouslySetInnerHTML={{
            __html: 'window.PROPS=' + JSON.stringify(this.props)
          }} />
          <script src="/bundle.js" />
        </body>
      </html>
    )
  }
}

export default App;
