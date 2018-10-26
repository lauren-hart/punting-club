import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => (
  <div>
    <h1 className="header">Punt Club</h1>
    <div className="btn-group-vertical">
      <Link to="/"><button>Home</button></Link>
      <Link to="/bets"><button>Bets</button></Link>
      <Link to="/members"><button>Members</button></Link>
      <Link to="/calculator"><button>Calculator</button></Link>
      {/* <Link to="/horoscopes"><button>Horoscopes</button></Link> */}
    </div>
  </div>
)

export default Header
