import React from 'react'
import {getBets} from '../actions'
import {connect} from 'react-redux'

class Summary extends React.Component {
  constructor (props) {
    super(props)
    this.addTotalBets = this.addTotalBets.bind(this)
    this.totalBetsByCouple = this.totalBetsByCouple.bind(this)
  }

  componentDidMount () {
    // triggering getBets action creator
    this.props.dispatch(getBets())
  }

  addTotalBets (bets) {
    return bets && bets.reduce((a, b) => a + b, 0)
  }

  totalBetsByCouple (couple) {
    return this.props.rawBets && this.props.rawBets.map(item => {
      return item.couple === couple ? item.amountBet++ : 0
    })
  }

  render () {
    const bh = this.addTotalBets(this.totalBetsByCouple('Bielby/Hart'))
    const ss = this.addTotalBets(this.totalBetsByCouple('Scaglia/Scaglia'))
    const bs = this.addTotalBets(this.totalBetsByCouple('Burningham/Sim'))

    console.log(bh, ss, bs)

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
