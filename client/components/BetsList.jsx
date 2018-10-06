import React from 'react'

const BetsList = (props) => {
  const amountBet = Number(props.list.amountBet).toFixed(2)
  const amountWon = isNaN(props.list.amountWon)
    ? Number(0).toFixed(2)
    : Number(props.list.amountWon).toFixed(2)
  const percentage = isNaN(((amountWon / amountBet) * 100))
    ? Number(0) : ((amountWon / amountBet) * 100).toFixed(0)

  return (
    <tr>
      <td>{props.list.person}</td>
      <td>{props.list.bet}</td>
      <td>${amountBet}</td>
      <td>${amountWon}</td>
      <td style={props.percentColour(percentage)}>{percentage}%</td>
      <td>{props.list.date}</td>
      <td><button>x</button></td>
      <td><button>Edit</button></td>
    </tr>
  )
}

export default BetsList
