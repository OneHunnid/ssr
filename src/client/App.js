import React from 'react'

class App extends React.Component {
  constructor() {
      super()
  }
  handleClick() {
    alert()
  }
  render() {
    console.log('hello from App')
    return (
      <html>
        <head>
          <title>Example SSR App</title>
          <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
          <main>
            <h1>Hello World!</h1>
            <p>This is some text that makes up a paragraph</p>
            <button onClick={this.handleClick}>Click me</button>
          </main>
          <script src="/bundle.js" />
        </body>
      </html>
    )
  }
}

export default App;
