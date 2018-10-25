import React from 'react'
import {connect} from 'react-redux'
// import {accounting} from 'accounting'

class Balance extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      amountBet: ''
    }
  }

  componentDidMount () {
  }

  render () {
    const test = this.props.rawBets && this.props.rawBets.map(item => {
      return isNaN(item.amountWon) ? Number(0) : Number(item.amountWon)
    })
    const test2 = test && test.reduce((a, b) => a + b, 0)
    console.log(test)
    console.log(test2)
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
