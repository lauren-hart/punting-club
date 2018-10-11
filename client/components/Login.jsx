import React from 'react'
import {connect} from 'react-redux'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      input: e.target.value
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
        <button onClick={this.handleClick}>Add</button>
        <p>{this.state.input}</p>
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
