import React from 'react'
// import {Redirect} from 'react-router-dom'
import {getBets} from '../actions'
import {connect} from 'react-redux'
import BetsList from './BetsList'
import {Link} from 'react-router-dom'

class Bets extends React.Component {
  componentDidMount () {
    this.props.dispatch(getBets())
  }

  render () {
    return (
      <div>
        <Link to='/'><button>Home</button></Link>
        <h1>Bets</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Couple</th>
              <th scope="col">Bet</th>
              <th scope="col">$ Bet</th>
              <th scope="col">$ Won</th>
              <th scope="col">%</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {this.props.bets && this.props.bets.map(list =>
              <BetsList key={list.id} list={list}/>)}
          </tbody>
        </table>
      </div>
    )
  }
}

// export default Bets

const mapStateToProps = (state) => {
  return {
    bets: state.bets.bets
  }
}

export default connect(mapStateToProps)(Bets)
