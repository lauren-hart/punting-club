import React from 'react'
import {connect} from 'react-redux'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      input: '',
      submitted: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
  }

  handleEnter (e) {
    if (e.keyCode === 13) {
      this.setState({
        submitted: true,
        input: e.target.value
      })
    }
  }

  handleClick (e) {
    this.setState({
      submitted: true,
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
          onKeyUp={this.handleEnter}
        ></input>
        <button onClick={this.handleClick}>Enter</button>
        <div>{this.state.submitted ? <p className="input-name">Hello {this.state.input}!</p> : <p></p>}</div>
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
