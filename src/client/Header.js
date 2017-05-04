import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  constructor() {
      super()
  }
  render() {
    return (
      <header>
        <nav>
          <Link to='/'>Home></Link>
          <Link to='/about'>About></Link>
        </nav>
      </header>
    )
  }
}

export default Header;
