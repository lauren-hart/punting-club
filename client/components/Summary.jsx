import React from 'react'
import {getBets} from '../actions'
import {connect} from 'react-redux'

class Summary extends React.Component {
  componentDidMount () {
    // triggering getBets action creator
    this.props.dispatch(getBets())
  }

  render () {
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
