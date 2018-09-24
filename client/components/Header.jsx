import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="container-fluid">

    <div className="header">
      <h1>Raro Punt Club</h1>
    </div>
    <div className="nav">
      <Link to="/"><button>Home</button></Link>
      <Link to="/bets"><button>Bets</button></Link>
      <Link to="/members"><button>Members</button></Link>
    </div>
  </div>
)

export default Header
