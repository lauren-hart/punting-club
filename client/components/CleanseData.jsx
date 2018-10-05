import React from 'react'
// import {Redirect} from 'react-router-dom'
// import {getBets} from '../actions'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

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
    // this.convertAmountBet()
  }

  // convertAmountBet () {
  //   const data = this.props.rawBets && this.props.rawBets.map(list => {
  //     return list.amountBet
  //   })
  //   console.log(data)
  //   this.setState({
  //     amountBet: data
  //   })
  // }

  // didBetWin (amountWon) {
  //   return <div>{isNaN(amountWon) ? 'Not a winner' : this.convertAmountBet(amountWon)}</div>
  // }

  // convertAmountWonPercent (amountBet) {
  //   const convertToNumber = Number(amountBet).toFixed(0)
  //   return isNaN(convertToNumber) ? Number(0.00).toFixed(2) : convertToNumber
  // }

  render () {
    console.log(this.props.rawBets)
    // const data = this.props.rawBets && this.props.rawBets.map(list => {
    //   return <tr key={list.id}>
    //     <td>{list.amountBet}</td>
    //     <td>{this.didBetWin(list.amountWon)}</td>
    //   </tr>
    // })
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
              {/* <th>{data}</th> */}
            </tr>
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
