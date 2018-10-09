import React from 'react'
import {connect} from 'react-redux'

class Timetable extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h3>Next to bet</h3>
        <div className="timetable">
          <h3>Couple...</h3>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rawBets: state.bets.rawBets
  }
}

export default connect(mapStateToProps)(Timetable)
