import React from 'react'
// import {Redirect} from 'react-router-dom'
import {getBets} from '../actions'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import BetsList from './BetsList'

class Bets extends React.Component {
  componentDidMount () {
    // triggering getBets action creator
    this.props.dispatch(getBets())
  }

  // Change the colour of percentage won based on percentage
  percentColour (betPercentage) {
    const red = {background: '#C34242', color: 'white'}
    const yellow = {background: '#E9D700', color: 'white'}
    const green = {background: '#1F7838', color: 'white'}
    const purple = {background: '#BE29EC', color: 'white'}

    if (betPercentage < 50) {
      return red
    } else if (betPercentage < 100) {
      return yellow
    } else if (betPercentage < 200) {
      return green
    } else if (betPercentage > 200) {
      return purple
    } else {
      return red
    }
  }

  render () {
    return (
      <div>
        <div className="bg-header">
          <h1 className="header">Bets</h1>
          <div className="nav">
            <Link to="/"><button>Home</button></Link>
            <Link to="/bets"><button>Bets</button></Link>
            <Link to="/members"><button>Members</button></Link>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Couple</th>
              <th scope="col">Person</th>
              <th scope="col">Bet</th>
              <th scope="col">$ Bet</th>
              <th scope="col">$ Won</th>
              <th scope="col">%</th>
              <th scope="col">Date</th>
              <th scope="col">Delete</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          {this.props.rawBets && this.props.rawBets.map(list =>
            <BetsList key={list.id} list={list} percentColour={this.percentColour}/>)}
        </table>

      </div>
    )
  }
}

// export default Bets

const mapStateToProps = (state) => {
  return {
    rawBets: state.bets.rawBets
  }
}

export default connect(mapStateToProps)(Bets)
