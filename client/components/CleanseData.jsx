import React from 'react'
// import {Redirect} from 'react-router-dom'
// import {getBets} from '../actions'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getBets} from '../actions'

class CleanseData extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      amountBet: [],
      amountWon: [],
      percentage: []
    }
    // this.convertAmountBet = this.convertAmountBet.bind(this)
  }

  componentDidMount () {
    // triggering getBets action creator
    this.props.dispatch(getBets())
  }

  render () {
    console.log(this.props.rawBets)
    return (
      <div>
        <Link to='/'><button>Home</button></Link>
        <h1>Cleanse Data</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Amount Bet</th>
              <th scope="col">Amount Won</th>
              <th scope="col">Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <th>{this.props.}</th> */}
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    rawBets: state.bets.rawBets
  }
}

export default connect(mapStateToProps)(CleanseData)
