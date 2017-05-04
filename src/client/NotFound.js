import React from 'react'

class NotFound extends React.Component {
  constructor() {
      super()
  }
  handleClick() {
    alert()
  }
  render() {
    return (
      <div>
        <h1>404 Error</h1>
        <p>This page is not found!</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    )
  }
}

export default NotFound;
