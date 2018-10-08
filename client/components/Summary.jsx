import React from 'react'
import {getBets} from '../actions'
import {connect} from 'react-redux'

class Summary extends React.Component {
  constructor (props) {
    super(props)
    this.addTotalBets = this.addTotalBets.bind(this)
  }

  componentDidMount () {
    // triggering getBets action creator
    this.props.dispatch(getBets())
  }

  addTotalBets (bets) {
    bets.str
  }

  render () {
    // You need a function to sum up bets by couple
    // filter by couple's name?

    const bielbyHart = this.props.rawBets && this.props.rawBets.map(list => {
      return list.couple === 'Bielby/Hart' ? list.amountBet : 0
    })

    return (
      <div>
        <h3 className="header leaderboard-h3">Leaderboard</h3>
        <table className="table leaderboard">
          <thead>
            <tr>
              <th scope="col">Couple</th>
              <th scope="col">$ Bet</th>
              <th scope="col">$ Won</th>
              <th scope="col">%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <td>{this.props.rawBets && this.props.rawBets.map(list => {
                return list.couple
              })}</td> */}
            </tr>
          </tbody>
          {/* {this.props.rawBets && this.props.rawBets.map(list =>
            <BetsList key={list.id} list={list} percentColour={this.percentColour}/>)} */}
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

export default connect(mapStateToProps)(Summary)
