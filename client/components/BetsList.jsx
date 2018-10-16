import React from 'react'
import {deleteBet, editBet} from '../actions/bets'
import {connect} from 'react-redux'
import {accounting} from 'accounting'

class BetsList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      edit: false,
      person: this.props.list.person,
      couple: this.props.list.couple,
      sport: this.props.list.sport,
      bet: this.props.list.bet,
      amountBet: this.props.list.amountBet,
      amountWon: this.props.list.amountWon,
      date: '',
      percentage: ''
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.sendBet = this.sendBet.bind(this)
    this.finishEdit = this.finishEdit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleDelete (e) {
    this.props.dispatch(deleteBet(e.target.value))
  }

  handleEdit () {
    this.setState({
      edit: !this.state.edit
    })
  }

  finishEdit (e) {
    this.sendBet(e.target.value)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sendBet (id) {
    this.props.dispatch(editBet(this.state, id))
  }

  render () {
    const amountBet = Number(this.props.list.amountBet).toFixed(2)
    const amountWon = isNaN(this.props.list.amountWon)
      ? Number(0).toFixed(2)
      : Number(this.props.list.amountWon).toFixed(2)
    const percentage = isNaN(((amountWon / amountBet) * 100))
      ? Number(0) : ((amountWon / amountBet) * 100).toFixed(0)
    return (
      <tbody>
        {this.state.edit
          ? <tr>
            <td>
              <input
                value={this.state.couple}
                onChange={this.handleChange}
                placeholder={this.state.couple}
                name="couple">
              </input>
            </td>
            <td>
              <input
                value={this.state.person}
                onChange={this.handleChange}
                placeholder={this.props.list.person}
                name="person">
              </input>
            </td>
            <td>
              <input
                value={this.state.bet}
                onChange={this.handleChange}
                placeholder={this.props.list.bet}
                name="bet">
              </input>
            </td>
            <td>
              <input
                value={this.state.amountBet}
                onChange={this.handleChange}
                placeholder={accounting.formatMoney(amountBet)}
                name="amountBet">
              </input>
            </td>
            <td>
              <input
                value={this.state.amountWon}
                onChange={this.handleChange}
                placeholder={accounting.formatMoney(amountWon)}
                name="amountWon">
              </input>
            </td>
            <td>
            </td>
            <td>
              <input
                value={this.state.date}
                onChange={this.handleChange}
                placeholder={this.props.list.date}
                name="date">
              </input>
            </td>
            <td></td>
            <td>
              <button
                value={this.props.list.id}
                onClick={this.finishEdit}>Finish
              </button>
            </td>
          </tr>
          : <tr>
            <td>{this.props.list.couple}</td>
            <td>{this.props.list.person}</td>
            <td>{this.props.list.bet}</td>
            <td>{accounting.formatMoney(amountBet)}</td>
            <td>{accounting.formatMoney(amountWon)}</td>
            <td style={this.props.percentColour(percentage)}>{percentage}%</td>
            <td>{this.props.list.date}</td>
            <td><button value={this.props.list.id} onClick={this.handleDelete}>x</button></td>
            <td><button value={this.props.list.id} onClick={this.handleEdit}>Edit</button></td>
          </tr>

        }
      </tbody>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rawBets: state.bets.rawBets
  }
}

export default connect(mapStateToProps)(BetsList)
