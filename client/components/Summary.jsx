import React from 'react'
import {connect} from 'react-redux'
import {accounting} from 'accounting'

class Summary extends React.Component {
  constructor (props) {
    super(props)
    this.addTotalBets = this.addTotalBets.bind(this)
    this.totalAmountBet = this.totalAmountBet.bind(this)
    this.totalAmountWon = this.totalAmountWon.bind(this)
    this.percentage = this.percentage.bind(this)
  }

  addTotalBets (bets) {
    return bets && bets.reduce((a, b) => a + b, 0)
  }

  totalAmountBet (couple) {
    return this.props.rawBets && this.props.rawBets.map(item => {
      return item.couple === couple ? item.amountBet++ : 0
    })
  }

  totalAmountWon (couple) {
    return this.props.rawBets && this.props.rawBets.map(item => {
      return item.couple === couple ? (isNaN(item.amountWon) ? Number(0) : (item.amountWon)++) : 0
    })
  }

  percentage (couple) {
    return ((this.addTotalBets(this.totalAmountWon(couple)) /
    this.addTotalBets(this.totalAmountBet(couple))) * 100).toFixed(1)
  }

  render () {
    const couplesPercents = {
      'Bielby/Hart': this.percentage('Bielby/Hart'),
      'Scaglia/Scaglia': this.percentage('Scaglia/Scaglia'),
      'Burningham/Sim': this.percentage('Burningham/Sim')
    }
    const sortCouplesPercent = Object.keys(couplesPercents).sort((a, b) => couplesPercents[b] - couplesPercents[a])

    const first = sortCouplesPercent[0]
    const second = sortCouplesPercent[1]
    const third = sortCouplesPercent[2]

    return (
      <div>
        <h3 className="header leaderboard-h3">Leaderboard</h3>
        <table className="table leaderboard">
          <thead>
            <tr>
              <th scope="col">Position</th>
              <th scope="col">Couple</th>
              <th scope="col">$ Bet</th>
              <th scope="col">$ Won</th>
              <th scope="col">%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>{first}</td>
              <td>{accounting.formatMoney(
                this.addTotalBets(this.totalAmountBet(first)))}
              </td>
              <td>{accounting.formatMoney(
                this.addTotalBets(this.totalAmountWon(first))
              )}</td>
              <td style={this.props.percentColour(this.percentage(first))}>
                {this.percentage(first)}%
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>{second}</td>
              <td>{accounting.formatMoney(
                this.addTotalBets(this.totalAmountBet(second)))}
              </td>
              <td>{accounting.formatMoney(
                this.addTotalBets(this.totalAmountWon(second))
              )}</td>
              <td style={this.props.percentColour(this.percentage(second))}>
                {this.percentage(second)}%
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>{third}</td>
              <td>{accounting.formatMoney(
                this.addTotalBets(this.totalAmountBet(third)))}
              </td>
              <td>{accounting.formatMoney(
                this.addTotalBets(this.totalAmountWon(third))
              )}</td>
              <td style={this.props.percentColour(this.percentage(third))}>
                {this.percentage(third)}%
              </td>
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
