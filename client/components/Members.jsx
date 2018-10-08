import React from 'react'
import {connect} from 'react-redux'
import Footer from './Footer'
import {Link} from 'react-router-dom'

class Members extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <div className="bg-grass"></div>
        <div className="bg-header">
          <h1 className="header">Bets</h1>
          <div className="nav">
            <Link to="/"><button>Home</button></Link>
            <Link to="/bets"><button>Bets</button></Link>
            <Link to="/members"><button>Members</button></Link>
          </div>
        </div>
        <h3 className="header">Members</h3>
        <Footer />
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    rawBets: state.bets.rawBets
  }
}

export default connect(mapStateToProps)(Members)
