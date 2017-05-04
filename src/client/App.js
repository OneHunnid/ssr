import React from 'react'
// import Main from './Main'
import Home from './Home'

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
            <Home />
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
