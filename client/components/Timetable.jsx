import React from 'react'
import {connect} from 'react-redux'

class Timetable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: '',
      weekday: ''
    }
    this.setDate = this.setDate.bind(this)
    this.setWeekday = this.setWeekday.bind(this)
  }

  componentDidMount () {
    this.setDate()
  }

  setDate () {
    const today = new Date()
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    this.setState({
      date: date
    })
  }

  setWeekday () {
    switch (new Date().getDay()) {
      case 0:
      case 6:
        return "It's the weekend, Time to bet!"
      case 1:
        return "It's only Monday.."
      case 2:
        return '4 more days'
      case 3:
        return 'Hump day, 3 days to go!'
      case 4:
        return '2 more days'
      case 5:
        return 'Get ready to bet tomorrow!'
    }
  }

  render () {
    return (
      <div>
        <h3>Next to bet</h3>
        <div className="timetable">
          <h5>{this.setWeekday()}</h5>
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
