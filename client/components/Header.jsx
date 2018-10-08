import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="height">
    <h1 className="header">Raro Punt Club</h1>
    <div className="nav">
      <Link to="/"><button>Home</button></Link>
      <Link to="/bets"><button>Bets</button></Link>
      {/* <Link to="/members"><button>Members</button></Link> */}
    </div>
  </div>
)

export default Header
