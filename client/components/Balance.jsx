import React from 'react'
import {connect} from 'react-redux'
// import {accounting} from 'accounting'

class Balance extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      amountBet: ''
    }
    this.totalAmountWon = this.totalAmountWon.bind(this)
  }

  componentDidMount () {
    this.totalAmountWon()
  }

  totalAmountWon () {
    return this.props.rawBets && this.props.rawBets.map(item => {
      return isNaN(item.amountWon) ? Number(0) : Number(item.amountWon)
    })
  }

  render () {
    return (
      <div>
        <h4 className="balance">Balance $</h4>
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
