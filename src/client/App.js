import React from 'react'

class App extends React.Component {
  constructor() {
      super()
  }
  handleClick() {
    alert()
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
            <h1>{this.props.title}</h1>
            <p>This is some text that makes up a paragraph</p>
            <button onClick={this.handleClick}>Click me</button>
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
