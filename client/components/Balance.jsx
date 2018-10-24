import React from 'react'
import {connect} from 'react-redux'
// import {accounting} from 'accounting'

class Balance extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
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
