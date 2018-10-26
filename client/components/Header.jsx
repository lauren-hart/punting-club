import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => (
  <div>
    <h1 className="header">Punt Club</h1>
    <div className="btn-group-vertical">
      <Link to="/"><button className="nav-button">Home</button></Link>
      <Link to="/bets"><button className="nav-button">Bets</button></Link>
      <Link to="/members"><button className="nav-button">Members</button></Link>
      <Link to="/calculator"><button className="nav-button">Calculator</button></Link>
      {/* <Link to="/horoscopes"><button className="nav-button">Horoscopes</button></Link> */}
    </div>
  </div>
)

export default Header
