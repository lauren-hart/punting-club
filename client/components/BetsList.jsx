import React from 'react'
// import styles from './styles.css'

const BetsList = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.list.person}</td>
        <td>{props.list.bet}</td>
        <td>{props.list.amountBet}</td>
        <td>{props.list.amountWon}</td>
        <td>{props.list.percentage}</td>
        <td>{props.list.date}</td>
      </tr>
    </tbody>
  )
}

export default BetsList
