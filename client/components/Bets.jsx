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
    const red = {background: '#EE3239', color: 'white'}
    const yellow = {background: '#FEC748', color: 'white'}
    const green = {background: '#499360', color: 'white'}
    const purple = {background: '#632A7E', color: 'white'}

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
        <Link to='/'><button>Home</button></Link>
        <Link to='/addbet'><button>Add Bet</button></Link>
        <h1>Bets</h1>
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
          <tbody>
            {this.props.rawBets && this.props.rawBets.map(list =>
              <BetsList key={list.id} list={list} percentColour={this.percentColour}/>)}
          </tbody>
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
