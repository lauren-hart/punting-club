import React from 'react'
import {connect} from 'react-redux'
import {accounting} from 'accounting'
import {editBet} from '../actions/bets'

class Editbet extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      person: '',
      couple: '',
      sport: '',
      bet: '',
      amountBet: '',
      amountWon: '',
      date: '',
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

  handleClick (e) {
    this.setState({
      submitted: !this.state.submitted
    })
    this.sendBet(e.target.value)
  }

  sendBet (id) {
    this.props.dispatch(editBet(this.state, id))
  }

  render () {
    return (
      <tr>
        <td><input placeholder={this.props.list.couple}></input></td>
        <td><input placeholder={this.props.list.person}></input></td>
        <td><input placeholder={this.props.list.bet}></input></td>
        <td><input placeholder={accounting.formatMoney(this.props.amountBet)}></input></td>
        <td><input placeholder={accounting.formatMoney(this.props.amountWon)}></input></td>
        <td></td>
        <td><input placeholder={this.props.list.date}></input></td>
        <td></td>
        <td><button value={this.props.list.id} onClick={this.handleClick}>Finish</button></td>
      </tr>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rawBets: state.bets.rawBets
  }
}

export default connect(mapStateToProps)(Editbet)
