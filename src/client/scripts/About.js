import React from 'react'

class About extends React.Component {
  constructor() {
      super()
  }
  handleClick() {
    alert()
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>lorem ipsum dolar!</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    )
  }
}

export default About;
