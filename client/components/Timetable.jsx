import React from 'react'
import {connect} from 'react-redux'

class Timetable extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h3>Timetable</h3>
        <table className="table members">
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <td></td>
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

export default connect(mapStateToProps)(Timetable)
