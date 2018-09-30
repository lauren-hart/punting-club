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
  }
  componentDidMount () {
    this.props.dispatch(getBets())
  }

  // cleanseAmountBet () {
  //   const amountBet = this.props.rawBets && this.props.rawBets.map(list => {
  //     return list.amountBet
  //   })
  // }

  // didBetWin (betAmount) {
  //   const convertToNumber = Number(betAmount).toFixed(2)
  //   if (isNaN(convertToNumber)) {
  //     return <p>Not a winner</p>
  //   } else {
  //     return <p>${convertToNumber}</p>
  //   }
  // }

  convertToNumber (number) {
    return isNaN(number) ? Number(number).toFixed(2) : number
  }

  render () {
    const amountBet = this.props.rawBets && this.props.rawBets.map(list => {
      return <li key={list.id}>{this.convertToNumber(list.amountBet)}</li>
    })
    return (
      <div>
        <Link to='/'><button>Home</button></Link>
        <h1>Cleanse Data</h1>
        <ul>{amountBet}</ul>
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
