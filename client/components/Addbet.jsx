import React from 'react'
import {connect} from 'react-redux'
import {addBet} from '../actions/bets'

export class Addbet extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      person: '',
      couple: '',
      sport: '',
      bet: '',
      amountBet: '',
      amountWon: '',
      percentage: '',
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.sendBet = this.sendBet.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick () {
    this.setState({
      submitted: !this.state.submitted
    })
    this.sendBet()
  }

  sendBet () {
    this.props.dispatch(addBet(this.state))
  }

  render () {
    return (
      <tr>
        <td><input placeholder='couple'></input></td>
        <td><input placeholder='person'></input></td>
        <td><input placeholder='bet'></input></td>
        <td><input placeholder='amount bet'></input></td>
        <td><input placeholder='amount won'></input></td>
        <td></td>
        <td><input placeholder='date'></input></td>
        <td></td>
        <td><button>Add</button></td>
      </tr>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rawBets: state.bets.rawBets
  }
}

export default connect(mapStateToProps)(Addbet)
