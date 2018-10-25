import React from 'react'
import {connect} from 'react-redux'
import {accounting} from 'accounting'

class Balance extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
  }

  render () {
    const amountBet = this.props.rawBets && this.props.rawBets.map(item => {
      return isNaN(item.amountWon) ? Number(0) : Number(item.amountWon)
    })
    const totalAmountBet = amountBet && amountBet.reduce((a, b) => a + b, 0)
    return (
      <div>
        <h4 className="balance">Holiday Fund</h4>
        <h4 className="balance">{accounting.formatMoney(totalAmountBet)}</h4>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rawBets: state.bets.rawBets
  }
}

export default connect(mapStateToProps)(Balance)
