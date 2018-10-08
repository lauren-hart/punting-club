import React from 'react'
import {connect} from 'react-redux'
import {accounting} from 'accounting'

class Summary extends React.Component {
  constructor (props) {
    super(props)
    this.addTotalBets = this.addTotalBets.bind(this)
    this.totalBetsByCouple = this.totalBetsByCouple.bind(this)
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
              <td>Bielby/Hart</td>
              <td>{accounting.formatMoney(bh)}</td>
            </tr>
            <tr>
              <td>Scaglia's</td>
              <td>{accounting.formatMoney(ss)}</td>
            </tr>
            <tr>
              <td>Burningham/Sim</td>
              <td>{accounting.formatMoney(bs)}</td>
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

export default connect(mapStateToProps)(Summary)
