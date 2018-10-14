import React from 'react'
import {connect} from 'react-redux'
import {addBet} from '../actions/bets'
import {Link} from 'react-router-dom'

export class Addbet extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      person: '',
      couple: '',
      sport: '',
      bet: '',
      amountBet: '',
      amountWon: '',
      date: '',
      percentage: '',
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.sendBet = this.sendBet.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick () {
    this.setState({
      submitted: !this.state.submitted
    })
    this.sendBet()
  }

  sendBet () {
    this.props.dispatch(addBet(this.state))
  }

  render () {
    return (
      <div>
        <div className="bg-grass"></div>
        <h1 className="header">Bets</h1>
        <div className="nav">
          <Link to="/"><button>Home</button></Link>
          <Link to="/bets"><button>Bets</button></Link>
          <Link to="/members"><button>Members</button></Link>
        </div>
        <table className="addbet">
          <thead></thead>
          <tbody>
            <tr>
              <td><input onChange={this.handleChange} name="couple" value={this.state.couple} placeholder='couple'></input></td>
              <td><input onChange={this.handleChange} name="person" value={this.state.person} placeholder='person'></input></td>
              <td><input onChange={this.handleChange} name="bet" value={this.state.bet} placeholder='bet'></input></td>
              <td><input onChange={this.handleChange} name="amountBet" value={this.state.amountBet} placeholder='amount bet'></input></td>
              <td><input onChange={this.handleChange} name="amountWon" value={this.state.amountWon} placeholder='amount won'></input></td>
              <td></td>
              <td><input onChange={this.handleChange} name="date" value={this.state.date} placeholder='date'></input></td>
              <td></td>
              <td><Link to="/bets"><button onClick={this.handleClick}>Add</button></Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rawBets: state.bets.rawBets
  }
}

export default connect(mapStateToProps)(Addbet)
