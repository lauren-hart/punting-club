import React from 'react'
import {connect} from 'react-redux'

import {getBets} from './actions'

export class Bets extends React.Component {
  // When component mounts it will run the action creator
  // This will create the connection to the store
  componentDidMount () {
    getBets()
  }

  render () {
    // This will be in the store
    const {bets} = this.props

    return (

      <div>
        <p>{bets}</p>
      </div>
    )
  }
}

// Mapping state of bets to props to be able to use as props

const mapStateToProps = ({bets}) => ({bets})

export default connect(mapStateToProps)(Bets)
