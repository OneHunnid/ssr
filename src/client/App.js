import React from 'react'

class App extends React.Component {
  constructor() {
      super()
  }
  __handleClick() {
    console.log('I was clicked!')
    alert("I was clicked!")
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
            <button onClick={this.__handleClick.bind(this)}>Click Me</button>
          </main>
          <script type="javascript" src="/bundle.js" />
        </body>
      </html>
    )
  }
}

export default App;
