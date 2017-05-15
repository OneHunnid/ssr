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
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/not-found'>Not Found</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;
