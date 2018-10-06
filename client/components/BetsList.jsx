import React from 'react'

class BetsList extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const amountBet = Number(this.props.list.amountBet).toFixed(2)
    const amountWon = isNaN(this.props.list.amountWon)
      ? Number(0).toFixed(2)
      : Number(this.props.list.amountWon).toFixed(2)
    const percentage = isNaN(((amountWon / amountBet) * 100))
      ? Number(0) : ((amountWon / amountBet) * 100).toFixed(0)
    return (
      <tr>
        <td>{this.props.list.person}</td>
        <td>{this.props.list.bet}</td>
        <td>${amountBet}</td>
        <td>${amountWon}</td>
        <td style={this.props.percentColour(percentage)}>{percentage}%</td>
        <td>{this.props.list.date}</td>
        {/* <td><button onClick={this.betprops.handleDelete}>x</button></td> */}
        <td><button>Delete</button></td>
      </tr>
    )
  }
}

export default BetsList
