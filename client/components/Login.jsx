import React from 'react'
import {connect} from 'react-redux'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      input: '',
      isSubmitted: false,
      submit: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit (e) {
    if (e.keyCode === 13 && this.state.submit === '') {
      this.setState({
        isSubmitted: !this.state.isSubmitted,
        submit: e.target.value
      })
    }
  }

  handleClear () {
    this.setState({
      isSubmitted: false,
      submit: '',
      input: ''
    })
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
          onKeyUp={this.handleSubmit}
          value={this.state.input}
        ></input>
        <button onClick={this.handleClick}>Enter</button>
        <button onClick={this.handleClear}>Clear</button>
        <div>{this.state.isSubmitted ? <p className="input-name">Hello {this.state.input}</p> : <p style={{opacity: '0'}}>Hi</p>}</div>

        {/* <p className="input-name">{this.state.isSubmitted ? 'Hello ' + this.state.input : '..'}</p></div> */}
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
