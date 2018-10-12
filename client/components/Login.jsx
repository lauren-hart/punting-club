import React from 'react'
import {connect} from 'react-redux'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      input: '',
      submitted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    if (e.keyCode === 13 && this.state.input === '') {
      this.setState({
        submitted: !this.state.submitted,
        input: e.target.value
      })
    }
  }

  render () {
    return (
      <div>
        <input
          placeholder="Enter your name"
          className="input-name"
          onChange={this.handleSubmit}
          onKeyUp={this.handleSubmit}
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
