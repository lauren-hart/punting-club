import React from 'react'
import {connect} from 'react-redux'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  render () {
    return (
      <div>
        <input
          placeholder="Enter your name"
          className="input-name"
          onChange={this.handleChange}
        ></input>
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
