import React from 'react'
import {connect} from 'react-redux'

class Login extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rawBets: state.bets.rawBets
  }
}

export default connect(mapStateToProps)(Login)
