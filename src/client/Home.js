import React from 'react'

class Home extends React.Component {
  constructor() {
      super()
  }
  handleClick() {
    alert()
  }
  render() {
    return (
      <div>
        <h1>HOME</h1>
        <p>This is some text that makes up a paragraph</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    )
  }
}

export default Home;
