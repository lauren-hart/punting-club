import React from 'react'

export class Editbet extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      person: '',
      couple: '',
      sport: '',
      bet: '',
      amountBet: '',
      amountWon: '',
      percentage: '',
      submitted: false
    }
  }

  render () {
    return (
      <div>
        <h1>Edit Bet</h1>
      </div>
    )
  }
}
