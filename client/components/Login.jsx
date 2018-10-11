import React from 'react'
import {connect} from 'react-redux'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      input: '',
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      input: e.target.value
    })
  }

  handleClick () {
    this.setState({
      submitted: !this.state.submitted
    })
  }

  render () {
    return (
      <div>
        <input
          placeholder="Enter your name"
          className="input-name"
          onChange={this.handleChange}
        ></input>
        <button onClick={this.handleClick}>Enter</button>
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
