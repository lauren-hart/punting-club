import React from 'react'
import {deleteBet, editBet} from '../actions/index'
import {connect} from 'react-redux'
// import Editbet from './Editbet'
// import {Redirect} from 'react-router-dom'

class BetsList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editStatus: false
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleDelete (e) {
    this.props.dispatch(deleteBet(e.target.value))
  }

  handleEdit (e) {
    this.setState({
      editStatus: !this.state.edit
    })
    this.props.dispatch(editBet(e.target.value, this.state))
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
        {this.state.editStatus
          ? <tr>
            <td><input value={this.state.couple} placeholder={this.props.list.couple}></input></td>
            <td><input value={this.state.person} placeholder={this.props.list.person}></input></td>
            <td><input value={this.state.bet} placeholder={this.props.list.bet}></input></td>
            <td><input value={this.state.amountBet} placeholder={amountBet}></input></td>
            <td><input value={this.state.amountWon} placeholder={amountWon}></input></td>
            <td></td>
            <td><input value={this.state.date} placeholder={this.props.list.date}></input></td>
            <td></td>
            <td><button>Finish</button></td>

          </tr>
          : <tr>
            <td>{this.props.list.couple}</td>
            <td>{this.props.list.person}</td>
            <td>{this.props.list.bet}</td>
            <td>${amountBet}</td>
            <td>${amountWon}</td>
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
