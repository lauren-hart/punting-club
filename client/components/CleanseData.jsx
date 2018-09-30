import React from 'react'
// import {Redirect} from 'react-router-dom'
import {getBets} from '../actions'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class CleanseData extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    this.convertToNumber = this.convertToNumber.bind(this)
    this.didBetWin = this.didBetWin.bind(this)
  }
  componentDidMount () {
    this.props.dispatch(getBets())
  }

  convertToNumber (amountBet) {
    return <div>${Number(amountBet).toFixed(2)}</div>
  }

  didBetWin (amountWon) {
    return <div>{isNaN(amountWon) ? 'Not a winner' : this.convertToNumber(amountWon)}</div>
  }

  render () {
    const data = this.props.rawBets && this.props.rawBets.map(list => {
      return <tr key={list.id}>
        <td>{this.convertToNumber(list.amountBet)}</td>
        <td>{this.didBetWin(list.amountWon)}</td>
      </tr>
    })
    return (
      <div>
        <Link to='/'><button>Home</button></Link>
        <h1>Cleanse Data</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Amount Bet</th>
              <th scope="col">Amount Won</th>
            </tr>
          </thead>
          <tbody>
            {data}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rawBets: state.bets.rawBets
  }
}

export default connect(mapStateToProps)(CleanseData)
