import React from 'react'
import {connect} from 'react-redux'
import {accounting} from 'accounting'

class Editbet extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
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
        <td></td>
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
