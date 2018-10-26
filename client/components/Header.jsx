import React from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'
import Balance from './Balance'

const Header = () => (
  <div>
    <h1 className="header">Punt Club</h1>
    <div className="nav">
      <Link to="/"><button>Home</button></Link>
      <Link to="/bets"><button>Bets</button></Link>
      <Link to="/members"><button>Members</button></Link>
      <Link to="/calculator"><button>Calculator</button></Link>
      {/* <Link to="/horoscopes"><button>Horoscopes</button></Link> */}
    </div>
    <Login />
    <Balance />
  </div>
)

export default Header
